const express = require('express');

const ctrl = require("../../controllers/Contacts");

const { validateBody, isValidId } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();


router.get("/", ctrl.listContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateBody(schemas.contactAddSchema), ctrl.addContact);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.listContacts
);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.contactAddSchema),
  ctrl.listContacts
);

router.delete("/:contactId", isValidId, ctrl.removeContact);

module.exports = router;
