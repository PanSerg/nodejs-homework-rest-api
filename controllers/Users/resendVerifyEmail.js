const HttpError = require("../../helpers/HttpError");
const sendEmail = require("../../helpers/sendEmail");
const User = require("../../models/user");
const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) throw HttpError(404, "User not found");
  if (user.verify) throw HttpError(400, "Verification has already been passed");

  const verificationEmail = {
    to: email,
    subject: "Verification email",
    html: `<a href="${BASE_URL}/api/users/verify/${user.verificationToken}" target="_blank>Verify email</a>`,
  };
  await sendEmail(verificationEmail);

  res.status(200).json({ message: "Verification email sent" });
};

module.exports = resendVerifyEmail;
