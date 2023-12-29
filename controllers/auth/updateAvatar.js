const path = require("path");

const fs = require("fs/promises");

const Jimp = require("jimp");

const { ctrlWrapper } = require("../../helpers");
const { User } = require("../../models/user");

const avatarsDir = path.join(__dirname, "../..", "public", "avatars");
const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;

  const image = await Jimp.read(tempUpload);
  await image.resize(250, 250).writeAsync(tempUpload);

  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);
  console.log(tempUpload);
  console.log(resultUpload);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", filename);

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = {
  updateAvatar: ctrlWrapper(updateAvatar),
};