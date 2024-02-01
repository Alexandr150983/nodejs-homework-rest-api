const { register } = require("./register");
const { login } = require("./login");
const { getCurrent } = require("./current");
const { logout } = require("./logout");
const { updateUserSubscription } = require("./updateUserSubscription");
const { updateAvatar } = require("./updateAvatar");
const { verifyEmail } = require("./verifyEmail");
const { resendVerifyEmail } = require("./resendVerifyEmail");
const { requestPasswordReset } = require("./requestPasswordReset");
const { resetPassword } = require("./resetPassword");

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  updateUserSubscription,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
  requestPasswordReset,
  resetPassword,
};
