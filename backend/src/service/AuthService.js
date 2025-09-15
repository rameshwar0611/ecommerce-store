const Seller = require("../model/Seller");
const VerificationCode = require("../model/VerificationCode");
const generateOTP = require("../util/generateOtp");
const sendVerificaationEmail = require("../util/sendEmail");

class AuthService {
  async sendLoginOTP(email) {
    const SIGNIN_PREFIX = "signin_";

    if (email.startswith(SIGNIN_PREFIX)) {
      const seller = await Seller.findOne({ email });
      if (!seller) {
        throw new Error("User not found");
      }
    }

    const existingVerificationCode = await VerificationCode.findOne({ email });
    if (existingVerificationCode) {
      await VerificationCode.deleteOne({ email });
    }
    const otp = generateOTP();
    const verificationCode = new VerificationCode(otp, email);
    await verificationCode.save();

    // send email to user
    const subject = "ecommerce-store: Your Login/Signup OTP";
    const body = `Your OTP is ${otp}. Please enter it to complete your login process.`;
    await sendVerificaationEmail(email, subject, body);
  }
}
