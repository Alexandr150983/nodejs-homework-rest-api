const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
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
    avatarURL: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
    passwordResetToken: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().required(),
  subscription: Joi.string()
    .valid("starter", "pro", "business")
    .default("starter"),
  token: Joi.string(),
});

const loginShema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().required(),
});

const emailSchema = Joi.object({
  email: Joi.string().required(),
});

const newPasswordSchema = Joi.object({
  newPassword: Joi.string().min(6).required(),
});

const schemas = {
  registerSchema,
  loginShema,
  emailSchema,
  newPasswordSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
