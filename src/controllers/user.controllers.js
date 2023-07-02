const User = require("../models/User");
const catchError = require("../utils/catchError");

const getAll = catchError(async (req, res) => {
  const getAll = await User.findAll();
  return res.json(getAll);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const getOne = await User.findByPk(id);
  return res.json(getOne);
});

const create = catchError(async (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;
  const create = await User.create({
    first_name,
    last_name,
    email,
    password,
    birthday,
  });
  return res.status(201).json(create);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password, birthday } = req.body;
  const update = await User.update(
    { first_name, last_name, email, password, birthday },
    { where: { id }, returning: true }
  );
  return res.json(update);
});
module.exports = {
  getAll,
  getOne,
  create,
  remove,
  update,
};
