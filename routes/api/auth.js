const express = require("express");

const ctrl = require("../../controllers/auth/index");

const { validateBody, authenticate } = require("../../middlewares/");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/users/register",
  validateBody(schemas.registerSchema),
  ctrl.register
);

router.post("/users/login", validateBody(schemas.loginShema), ctrl.login);

router.get("/users/curent", authenticate, ctrl.getCurrent);

router.post("/users/logout", authenticate, ctrl.logout);

router.patch("/users/:userId", authenticate, ctrl.updateUserSubscription);

module.exports = router;
