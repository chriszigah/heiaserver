const schorlarship = require("../models/schorlarship");
var asyncWrapper = require("../middlewares/asyncWrapper");
var randomToken = require("random-token");
const { validationResult } = require("express-validator");

// To be moved to auth
exports.createSchorlaship = asyncWrapper(async (req, res, next) => {
  const id = randomToken(32);

  const { description, startdate, enddaate, amount, department } = req.body;

  const newPayment = {
    description,
    startdate,
    enddaate,
    amount,
    department,
  };

  const payment = await Payment.add(newPayment);

  return res.status(201).json(user);
});

exports.getAllPayments = asyncWrapper(async (req, res, next) => {
  const dbPayments = await Payment.findAll();
  res.status(200).json(dbPayments);
});

exports.gPaymentByID = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const dbPayment = await Payment.findById(id);
  dbPayment === undefined
    ? res.status(404).json({ msg: `Payment with id ${id} not found` })
    : res.status(200).json(dbPayment);
});

exports.updatePaymentByID = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const changes = req.body;
  const dbPayment = await Payment.update(id, changes);
  dbPayment === undefined
    ? res.status(404).json({ msg: `Payment with id ${id} not found` })
    : res.status(200).json(dbPayment);
});

exports.deletePaymentByID = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const delPayment = await Payment.remove(id);
  delPayment === undefined
    ? res.status(404).json({ msg: `Payment with id ${id} not found` })
    : res.status(400).json({ msg: "Payment was deleted successfully" });
});
