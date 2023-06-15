const bcrypt = require("bcrypt");
const User = require("../../models/user");
const HttpError = require("../../helpers/HttpError");
const gravatar = require("gravatar");

const register = async (req, res) => {
  const { email, password } = req.body;
  // Поиск по почтовым адресам
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }

      // Хеширование пароля
  const result = await bcrypt.hash(password, 10);
    const avatarUrl = gravatar.url(email);
 
  const newUser = await User.create({
    ...req.body,
    password: result,
    avatarUrl,
  });
 // Возврат данных на фронт
  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription
  });
};

module.exports = register;
