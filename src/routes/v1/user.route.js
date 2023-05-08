const express = require("express");
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require("../../controllers/user.controller");
const router = express.Router();

const { getUser } = require('../../validations/user.validation');
//const auth = require("../../middlewares/auth");

//router.get("/:userId",userController.getUser)
router.get(
    "/:userId",validate(getUser),
        userController.getUser
  );

router.put("/:userId",userController.setAddress)


module.exports = router;
