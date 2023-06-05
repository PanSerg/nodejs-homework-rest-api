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
    throw new HttpError(401, "Email or password invalid");
    }
    // по паролю
    const compareResult = await bcrypt.compare(password, user.password);
    if (!compareResult) {
          throw new HttpError(401, "Email or password invalid");
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

  // Хеширование пароля
    const result = await bcrypt.hash(password, 10);
 
  const newUser = await User.create({ ...req.body, password: result });
 // Возврат данных на фронт
  res
    .status(201)
    .json({ email: newUser.email, subscription: newUser.subscription });
};

module.exports = login;
