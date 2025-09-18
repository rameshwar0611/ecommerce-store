const SellerService = require("../service/SellerService");
const jwtProvider = require("../util/jwtProvider");

const sellerMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res
        .status(401)
        .json({ message: "Invalid token, authorization failed" });
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Invalid token, authorization failed" });
    }

    let email = jwtProvider.getEmailFromjwt(token);

    const seller = SellerService.getSellerByEmail(email);
    req.seller = seller;

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = sellerMiddleware;
