const Cart = require("../model/cart");
const Seller = require("../model/Seller");
const User = require("../model/User");
const VerificationCode = require("../model/VerificationCode");
const generateOTP = require("../util/generateOtp");
const jwtProvider = require("../util/jwtProvider");
const sendVerificationEmail = require("../util/sendEmail");
const SellerService = require("./SellerService");
const bcrypt = require("bcrypt");

class AuthService {
  async sendLoginOTP(email) {
    const SIGNIN_PREFIX = "signin_";

    if (email.startsWith(SIGNIN_PREFIX)) {
      email = email.substring(SIGNIN_PREFIX.length);
      const seller = await SellerService.getSellerByEmail(email);
      if (!seller) {
        throw new Error("User not found");
      }
    }

    const existingVerificationCode = await VerificationCode.findOne({ email });
    if (existingVerificationCode) {
      await VerificationCode.deleteOne({ email });
    }
    const otp = generateOTP();
    const verificationCode = new VerificationCode({ otp, email });
    await verificationCode.save();

    // send email to user
    const subject = "ecommerce-store: Your Login/Signup OTP";
    const body = `Your OTP is ${otp}. Please enter it to complete your login process.`;
    await sendVerificationEmail(email, subject, body);
  }

  async createUser(req) {
    const { email, fullName } = req;

    let user = await User.findOne({ email });
    if (user) {
      throw new Error("User already exists with email");
    }
    user = new User({
      email,
      fullName,
      password: bcrypt.hash(12345678, 10),
    });
    await user.save();

    const cart = new Cart({ user: user._id });
    await cart.save();

    return jwtProvider.createJwt({ email });
  }

  async signin(req) {
    const { email, otp } = req;

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found with email");
    }
    const verificationCode = await VerificationCode.findOne({ email });
    if (!verificationCode || verificationCode.otp !== otp) {
      throw new Error("Invalid OTP");
    }

    return {
      message: "Login successfully",
      jwt: jwtProvider.createJwt({ email }),
      role: user.role,
    };
  }
}

module.exports = new AuthService();
