const express = require("express");

const ctrl = require("../../controllers/auth/index");

const { validateBody, authenticate } = require("../../middlewares/");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginShema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/:userId", authenticate, ctrl.updateUserSubscription);

module.exports = router;