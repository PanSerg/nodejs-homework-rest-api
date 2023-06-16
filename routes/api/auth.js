const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/Users");
const { validateBody, authenticate } = require("../../middlewares");
const { authSchema } = require("../../schemas/contacts");

router.post(
  "/register",
  validateBody(authSchema.registerSchema),
  ctrl.register
);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post("verify", validateBody(authSchema), ctrl.resendVerifyEmail);

router.post("/login", validateBody(authSchema.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/",
  validateBody(authSchema.subscript),
  authenticate,
  ctrl.updateSubscription
);

module.exports = router;
