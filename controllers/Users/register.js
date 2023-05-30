const { User } = require('../../models/user');
const { HttpError, ctrWrapper } = require('../../helpers');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    const { email, password } = req.body;
// Поиск по почтовым адресам
    const user = await User.findOne({ email });
    if (user) {
        throw HttpError(409, "Email in use");
    }
    const result = await bcrypt.hash(password, 10);
    // Создание пользователя с хешованым паролем 
    const newUser = await User.create({...req.body, password: result });

    // Возвращение данных на фронт
    res.status(201).json({email: newUser.email});
};
 
module.exports = {
    register: ctrWrapper(register),
};