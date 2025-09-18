const jwtProvider = require("../util/jwtProvider");
const User = require("../model/User");

class UserService {
  async findUserProfileByJwt(jwt) {
    const email = jwtProvider.getEmailFromjwt(jwt);

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error(`User does not exist with email ${email}`);
    }
    return user;
  }

  async findUserProfileByEmail(email) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error(`User does not exist with email ${email}`);
    }
    return user;
  }
}

module.exports = new UserService;
