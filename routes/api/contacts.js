const express = require('express');

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const schemas = require("../../schemas/contacts");
console.log(schemas);
const router = express.Router();


router.get("/", ctrl.listContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateBody(schemas.contactAddSchema), ctrl.addContact);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.listContacts.updateContactSchema
);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.contactAddSchema),
  ctrl.listContacts.updateById
);

router.delete("/:contactId", isValidId, ctrl.removeContact);

module.exports = router;
