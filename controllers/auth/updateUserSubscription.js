const { HttpError, ctrlWrapper } = require("../../helpers");
const { User } = require("../../models/user");

const updateUserSubscription = async (req, res) => {
  const { userId } = req.params;
  const { subscription } = req.body;

  const result = await User.findByIdAndUpdate(
    userId,
    { subscription },
    {
      new: true,
    }
  );

  if (!result) {
    throw HttpError(404, "User not found");
  }
  res.json(result);
};

module.exports = {
  updateUserSubscription: ctrlWrapper(updateUserSubscription),
};
