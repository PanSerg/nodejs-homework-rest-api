const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: emailRegExp,
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("save", handleMongooseError);

const User = model("User", userSchema);

module.exports = User;
