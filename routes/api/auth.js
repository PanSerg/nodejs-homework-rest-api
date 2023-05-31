const express = require('express');
const router = express.Router();
const ctrl = require("../../controllers/Users/index");
const { validateBody } = require("../../middlewares");
const { authSchema } = require("../../schemas/contacts");


router.post(
  "/register",
  validateBody(authSchema.registerSchema),
  ctrl.register
);

router.post("/login", validateBody(authSchema.loginSchema), ctrl.login);

module.exports = router;