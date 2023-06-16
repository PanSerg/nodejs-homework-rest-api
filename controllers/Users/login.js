const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const HttpError = require("../../helpers/HttpError");
const { SECRET_KEY } = process.env;

// Ищем пользователя по его email
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password invalid");
  }
  if (!user.verify) {
    throw HttpError(401, "Not Email verify");
  }
    // по паролю
    const compareResult = await bcrypt.compare(password, user.password);
    if (!compareResult) {
          throw HttpError(401, "Email or password invalid");
    }
    // Возвращение данных для хеширования
     const payload = {
       id: user._id,
    };
    // Хеширование токена
  const { subscription } = user;
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
   await User.findByIdAndUpdate(user._id, { token });
  res.json({ token, user: {email, subscription} });
};

module.exports = login;
