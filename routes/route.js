const express = require("express");

const router = new express.Router();

const userController = require("../controllers/users");
const calorieController = require("../controllers/calories");
// Middleware function to validate the access token and authorize the request

router.post("/createNewUser", userController.createNewUser);
router.post("/signIn", userController.signIn);
router.post("/updateUser", calorieController.updateMeals)


module.exports = router;
