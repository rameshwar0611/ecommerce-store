const UserRoles = require("../domain/UserRole");
const VerificationCode = require("../model/VerificationCode");
const sellerService = require("../service/SellerService");
const jwtProvider = require("../util/jwtProvider");

class SellerController {
  // Bearer token

  async getSellerProfile(req, res) {
    try {
      const profile = await req.seller;
      console.log("profile: ", profile);

      const jwt = req.headers.authorization.split(" ")[1];
      const seller = await sellerService.getSellerProfile(jwt);
      res.status(200).json(seller);
    } catch (error) {
      res
        .status(error instanceof Error ? 404 : 500)
        .json({ message: error.message });
    }
  }

  async createSeller(req, res) {
    try {
      const seller = await sellerService.createSeller(req.body);
      res.status(200).json({ message: "Seller created successfully." });
    } catch (error) {
      res
        .status(error instanceof Error ? 404 : 500)
        .json({ message: error.message });
    }
  }

  async getAllSellers(req, res) {
    try {
      const status = req.query.status;
      const sellers = await sellerService.getAllSellers(status);
      res.status(200).json(sellers);
    } catch {
      res
        .status(error instanceof Error ? 404 : 500)
        .json({ message: error.message });
    }
  }

  async updateSeller(req, res) {
    try {
      const existingSeller = await req.seller;
      const updatedSeller = await sellerService.updateSeller(
        existingSeller,
        req.body
      );
      res.status(200).json(updatedSeller);
    } catch (error) {
      res
        .status(error instanceof Error ? 404 : 500)
        .json({ message: error.message });
    }
  }

  async deleteSeller(req, res) {
    try {
      const sellerId = req.params.id;
      await sellerService.deleteSeller(sellerId);
      res.status(200).json({ message: "Seller deleted successfully" });
    } catch (error) {
      res
        .status(error instanceof Error ? 404 : 500)
        .json({ message: error.message });
    }
  }

  async updateSellerAccountStatus(req, res) {
    try {
      const status = req.params.status;
      const sellerId = req.params.id;
      const updatedSeller = sellerService.updateSellerStatus(sellerId, status);
      res.status(200).json(updatedSeller);
    } catch (error) {
      res
        .status(error instanceof Error ? 404 : 500)
        .json({ message: error.message });
    }
  }

  async verifyLoginOtp(req, res) {
    try {
      const { otp, email } = req.body;
      const seller = await sellerService.getSellerByEmail(email);
      const verificationCode = await VerificationCode.findOne({ email });
      if (!verificationCode || verificationCode.otp != otp) {
        throw new Error("Invalid OTP");
      }
      const token = jwtProvider.createJwt({ email });
      const authResponse = {
        message: "Login Success",
        jwt: token,
        role: UserRoles.SELLER,
      };
      res.status(200).json(authResponse);
    } catch (error) {
      res
        .status(error instanceof Error ? 404 : 500)
        .json({ message: error.message });
    }
  }
}

module.exports = new SellerController();
