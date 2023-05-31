const { ctrlWrapper } = require("../../helpers/ctrlWrappers");
const register = require("./register");

module.exports = {
    register: ctrlWrapper(register),
    
};
    