const express = require('express');
const router = express.Router();
const ctrl = require("../../controllers/Users");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { authSchema } = require("../../schemas/contacts");

router.post(
  "/register",
  validateBody(authSchema.registerSchema),
  ctrl.register
);

router.post("/login", validateBody(authSchema.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/", validateBody(authSchema.subscript),
  authenticate, ctrl.updateSubscription);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.patchAvatar);

module.exports = router;