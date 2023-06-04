const { isValidObjectId } = require("mongoose");

const HttpError = require("../helpers/HttpError");

const isValidId = (req, res, next) => {
    const { ContactId } = req.params;
    if (!isValidObjectId(ContactId)) {
        next(HttpError(400, `${ContactId} is not a valid id`));
    }
    next();
};

module.exports = isValidId;
