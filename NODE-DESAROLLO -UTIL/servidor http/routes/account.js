import express from "express";
const accountRouter = express.Router();
import { USERS_BBDD } from "../bbdd.js";
import userModel from "../schemas/user-schema.js";

accountRouter.use((req, res, next) => {
  console.log(req.ip);
  next();
});
accountRouter.get("/account", (req, res) => {
  res.end(console.log("si hay conexion"));
});

accountRouter.get("/account/:guid", async (req, res) => {
  const { guid } = req.params;
  const user = await userModel.findById(guid).exec();
  if (!user) {
    res.status(404).send();
  }
  return res.send(user);
});
//crear nurva cuenta a travez de guid

accountRouter.post("/", async (req, res) => {
  const { guid, name } = req.body;
  if (!name || !guid) {
    res.state(400).send();
  }
  const user = await userModel.findById(guid).exec();

  if (user) {
    return res.status(409).send();
  }
  const newUser = new userModel({ _id: guid, name });
  await newUser.save();

  return res.send();
});
//actualizar el nombre de una cuenta

accountRouter.patch("/account/:guid", async (req, res) => {
  const user = await userModel.findById(guid).exec();
  const { name } = req.body;

  if (!name) {
    res.state(400).send();
  }
  if (!user) {
    res.status(404).send();
  }
  user.name = name;

  await user.save();
  return res.send();
});
//eliminar

accountRouter.delete("/account/:guid", async (req, res) => {
  const user = await userModel.findById(guid).exec();

  if (!user) {
    res.status(404).send();
  }
  await user.remove(); //elimina el elemento del array
  return res.send();
});

export default accountRouter;
