const User = require("../../models/user");
const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");
const HttpError = require("../../helpers/HttpError");

const avatarDir = path.join(__dirname, "..", "..", "public", "avatars");

const patchAvatar = async (req, res) => {
  const { _id } = req.user;

  const { path: tempUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;

  const resultUpload = path.join(avatarDir, filename);
  await fs.rename(tempUpload, resultUpload);
  const avatarUrl = path.join("avatars", filename);
  
  Jimp.read(resultUpload, (error, image) => {
    if (error) throw HttpError(404, "Avatar not found");
    image.resize(250, 250).write(resultUpload);
  });
    
  await User.findOneAndUpdate(_id, { avatarUrl });

  res.json({ avatarUrl });
};

module.exports = patchAvatar;