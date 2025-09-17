const Seller = require("../model/Seller");
const VerificationCode = require("../model/VerificationCode");
const generateOTP = require("../util/generateOtp");
const sendVerificationEmail = require("../util/sendEmail");
const SellerService = require("./SellerService");

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
}

module.exports = new AuthService();
