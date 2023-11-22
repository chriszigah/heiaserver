var express = require("express");
const router = express.Router();
const paymentController = require("../controllers/payment");
const { check } = require("express-validator");
const {
  ensureAuthenticated,
  forwardAuthenticated,
} = require("../middlewares/auth");

// @route POST api/v1/schorlarship
// @desc Create a new schorlarship
// @access Private

router.post(
  "/create",
  ensureAuthenticated,
  paymentController.createSchorlaship
);

// @route GET api/v1/payments
// @desc Fetch all users
// @access Private

router.get("/all", paymentController.getAllPayments);

// @route GET api/v1/payment/:id
// @desc Get a payment by ID
// @access Private

router.get("/:id", paymentController.PaymentByID);

// @route PATCH api/v1/:id
// @desc update a payment by ID
// @access Private
router.patch("/:id", paymentController.updatePaymentByID);

// @route DELETE api/v1/:id
// @desc delete a payments by ID
// @access Private

router.delete("/:id", paymentController.deletePaymentByID);

module.exports = router;
