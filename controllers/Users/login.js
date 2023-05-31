const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {User} = require("../../models/user");
const { HttpError } = require("../../helpers");
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
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
    console.log(token);

    // const decodeToken = jwt.decode(token);
    // console.log(decodeToken);
};

module.exports = login;
