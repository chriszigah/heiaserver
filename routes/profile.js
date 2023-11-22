var express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile");
const { check } = require("express-validator");
const {
  ensureAuthenticated,
  forwardAuthenticated,
} = require("../middlewares/auth");

// @route GET /profile/:userid
// @desc Get User profile by ID
// @access Private

router.get(
  "/:userid",
  ensureAuthenticated,
  profileController.getProfileUserByID
);

// @route POST api/v1/user
// @desc Create a User
// @access Public

//router.post("/register", profileController.addUser);

// @route GET /profile
// @desc Fetch all users
// @access Private

router.get("/", profileController.getAllProfiles);

// @route GET profile/:id
// @desc Get a user profile by ID
// @access Private

router.get("/:id", profileController.getProfileByID);

// @route PATCH /profile/update/:id
// @desc update a profile
// @access Private
router.patch("/:id", profileController.updateProfileByID);

// @route DELETE api/v1/:id
// @desc delete a lesson by ID
// @access Private

router.delete("/:id", profileController.deleteProfileByID);

module.exports = router;
