const { register } = require("./register");
const { login } = require("./login");
const { getCurrent } = require("./current");
const { logout } = require("./logout");
const { updateUserSubscription } = require("./updateUserSubscription");
const { updateAvatar } = require("./updateAvatar");

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  updateUserSubscription,
  updateAvatar,
};
