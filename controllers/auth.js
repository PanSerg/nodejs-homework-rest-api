// const bcrypt = require("bcrypt");
// const User = require("../../models/user");
// const HttpError = require("../../helpers/HttpError");
// const ctrlWrapper = require("../../helpers/ctrlWrapper");

// const register = async (req, res) => {
//   const { email, password } = req.body;
//   // Поиск по почтовым адресам
//   const user = await User.findOne({ email });
//   if (user) {
//     throw HttpError(409, "Email in use");
//     }

//       // Хеширование пароля
//     const result = await bcrypt.hash(password, 10);
 
//   const newUser = await User.create({ ...req.body, password: result });
//  // Возврат данных на фронт
//   res
//     .status(201)
//     .json({ email: newUser.email, subscription: newUser.subscription });
// };


// module.exports = {
//   register: ctrlWrapper(register),
// };
