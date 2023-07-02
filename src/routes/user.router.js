const express = require("express");
const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/user.controllers");

const userRouter = express.Router();

userRouter.route("/").get(getAll).post(create);
userRouter.route("/:id").get(getOne).delete(remove).put(update);

module.exports = userRouter;
