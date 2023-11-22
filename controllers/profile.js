const Profile = require("../models/profile");
var asyncWrapper = require("../middlewares/asyncWrapper");
var randomToken = require("random-token");
const { validationResult } = require("express-validator");

exports.addAllProfiles = asyncWrapper(async (req, res, next) => {
  const dbProfiles = await Profile.addProfile;
  res.status(200).json(dbProfiles);
});

exports.getAllProfiles = asyncWrapper(async (req, res, next) => {
  const dbProfiles = await Profile.findAllProfiles();
  res.status(200).json(dbProfiles);
});

exports.getProfileUserByID = asyncWrapper(async (req, res, next) => {
  const { userid } = req.params;
  const dbProfile = await Profile.findProfileByUserId(userid);
  dbProfile === undefined
    ? res.status(404).json({ msg: `Profile with userid ${userid} not found` })
    : res.status(200).json(dbProfile);
});

exports.getProfileByID = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const dbProfile = await Profile.findProfileByID(id);
  dbProfile === undefined
    ? res.status(404).json({ msg: `Profile with id ${id} not found` })
    : res.status(200).json(dbProfile);
});

exports.updateProfileByID = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const changes = req.body;
  const dbProfile = await Profile.updateProfile(id, changes);
  dbProfile === undefined
    ? res.status(404).json({ msg: `Profile with id ${id} not found` })
    : res.status(200).json(dbProfile);
});

exports.deleteProfileByID = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const delProfile = await Profile.removeProfileByID(id);
  delProfile === undefined
    ? res.status(404).json({ msg: `Profile with id ${id} not found` })
    : res.status(400).json({ msg: "Profile was deleted successfully" });
});
