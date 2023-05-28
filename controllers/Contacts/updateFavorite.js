// const Contact = require("../models/contact");
// const HttpError = require("./helpers/HttpError");
// const ctrlWrapper = require("./helpers/ctrlWrapper");

// const updateFavorite = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await Contact.findByIdAndUpdate(contactId, req.body, {
//     new: true,
//   });
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.status(200).json(result);
// };

// module.exports = {
//     updateFavorite: ctrlWrapper(updateFavorite)
// };
