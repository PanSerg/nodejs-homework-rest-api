const Joi = require("joi");

const phoneRegExp = /^\(\d{3}\)[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;

const contactAddSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().pattern(phoneRegExp).required(),
  favorite: Joi.boolean().required(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const subscript = Joi.object({
  subscription: Joi.string()
    .valid("starter", "pro", "business")
    .max(1)
    .required(),
});
  
const schemas = {
  contactAddSchema,
  updateFavoriteSchema,
 
};

const authSchema = {
  registerSchema,
  loginSchema,
  subscript,
};

module.exports = {
  schemas,
  authSchema,
};