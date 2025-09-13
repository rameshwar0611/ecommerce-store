const jwt = require("jsonwebtoken");

const secretKey =
  "djafdfjdlsakteioitutuousoipuddghhkjbvnfkvnkadjdggfjkljkdsfoaepiruiodkaljfjdanvcnkkdjgfdsfdsjroijtoruoiusdfioufdgkfskfgsnkcvkjkjgjskdjsfjdjfjsdngkretkrje";

class JwtProvider {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  createJwt(payload) {
    return jwt.sign(payload, this.secretKey, { expiresIn: "24h" });
  }

  getEmailFromjwt(token) {
    try {
      const decodedToken = jwt.verify(token, secretKey);
      return decodedToken.email;
    } catch (err) {
      throw new Error("Invalid Token");
    }
  }

  verifyJwt(token) {
    try {
      jwt.verify(token, secretKey);
      return true;
    } catch (error) {
      throw new Error("Invalid Token");
    }
  }
}

module.exports = new JwtProvider(secretKey);
