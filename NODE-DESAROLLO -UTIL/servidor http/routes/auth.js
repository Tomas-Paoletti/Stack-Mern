import { Router } from "express";

import checkEmailPassword from "../helpers/checkEmailPassword.js";
const authRouter = Router();

//Endpoint publico (no autenticado ni autorizado)
authRouter.get("/publico", (req, res) => {
  res.send("Endpoint publico");
});
//Endpoint autenticado para todo usuario  registrado
authRouter.post("/autenticado", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).send();
  try {
    const user = checkEmailPassword(email, password);
    return res.send(`Usuario ${user.name} autenticado`);
  } catch (error) {
    return res.status(401).send();
  }
});
//Endpoint autorizado admin
authRouter.post("/autorizado", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).send();

  try {
    const user = checkEmailPassword(email, password);
    if (user.rol !== "admin") return res.status(403).send();

    return res.send(`Usuario administrado ${user.name}`);
  } catch (error) {
    return res.status(401).send();
  }
});

export default authRouter;
