import express from "express";
const accountRouter = express.Router();
import { USERS_BBDD } from "../bbdd.js";

accountRouter.use((req, res , next) => {
  console.log(req.ip);
  next();  
});
accountRouter.get("/account", (req, res) => {
  res.end(console.log("si hay conexion"));
});

accountRouter.get("/account/:guid", (req, res) => {
  const { guid } = req.params;
  const user = USERS_BBDD.find((user) => user.guid === req.params.guid);
  if (!user) {
    res.status(404).send();
  }
  return res.send(user);
});
//crear nurva cuenta a travez de guid

accountRouter.post("/account/", (req, res) => {
  const { guid, name } = req.body;
  if (!name || !guid) {
    res.state(400).send();
  }

  const user = USERS_BBDD.find((user) => user.guid === guid);
  if (user) {
    return res.status(409).send();
  }
  USERS_BBDD.push({
    guid,
    name,
  });

  return res.send();
});
//actualizar el nombre de una cuenta

accountRouter.patch("/account/:guid", (req, res) => {
  const user = USERS_BBDD.find((user) => user.guid === req.params.guid);
  const { name } = req.body;

  if (!name) {
    res.state(400).send();
  }
  if (!user) {
    res.status(404).send();
  }
  user.name = name;

  return res.send();
});
//eliminar

accountRouter.delete("/account/:guid", (req, res) => {
  const userIndex = USERS_BBDD.findIndex(
    (user) => user.guid === req.params.guid
  ); //solo nos devuelve el index de la busqueda
  if (userIndex === -1) {
    res.status(404).send();
  }
  USERS_BBDD.splice(userIndex, 1); //elimina el elemento del array
  return res.send();
});

export default accountRouter;
