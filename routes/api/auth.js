const express = require('express');
const router = express.Router();
const ctrl = require("../../controllers/Users/index");
const { validateBody, authenticate } = require("../../middlewares");
const { authSchema } = require("../../schemas/contacts");

router.post(
  "/register",
  validateBody(authSchema.registerSchema),
  ctrl.register
);

router.post("/login", validateBody(authSchema.authSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/", validateBody(authSchema.subscript),
authenticate, ctrl.updateSubscription);

module.exports = router;