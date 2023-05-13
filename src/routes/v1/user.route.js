const express = require("express");
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require("../../controllers/user.controller");
const router = express.Router();

const { getUser } = require('../../validations/user.validation');
//const auth = require("../../middlewares/auth");

//router.get("/:userId",userController.getUser)
router.get(
  "/:userId",
  // CRIO_SOLUTION_START_MODULE_AUTH
  auth(),
  // CRIO_SOLUTION_END_MODULE_AUTH
  validate(userValidation.getUser),
  userController.getUser
);
// CRIO_SOLUTION_END_MODULE_UNDERSTANDING_BASICS

// Supports updating address only currently
router.put(
  "/:userId",
  auth(),
  validate(userValidation.setAddress),
  userController.setAddress
);


module.exports = router;
