const User = require("../../models/user");
const path = require("path");
const fs = require("fs/promises");

const avtarDir = path.join(__dirname, "..", "..", "public", "avatars");

const patchAvatar = async (req, res) => {
  const { _id } = req.user;

  const { path: tempUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;

  const resultUpload = path.join(avtarDir, filename);
  await fs.rename(tempUpload, resultUpload);
    const avatarUrl = path.join("avatars", filename);
    
  await User.findOneAndUpdate(_id, { avatarUrl });

  res.json({ avatarUrl });
};

module.exports = patchAvatar;