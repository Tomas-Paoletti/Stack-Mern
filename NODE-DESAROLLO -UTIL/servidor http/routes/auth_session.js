import { nanoid } from "nanoid";

import { Router } from "express";
import checkEmailPassword from "../helpers/checkEmailPassword.js";
import { USERS_BBDD } from "../bbdd.js";

const sessions = [];
const authSessionRouter = Router();

authSessionRouter.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).send();
  try {
    const { guid } = checkEmailPassword(email, password); //sacamos solo el guid del usuario poara guardarlo con la sesion
    const sessionId = nanoid();
    sessions.push({ sessionId, guid }); // aca lo enlazamos

    res.cookie("sessionId", sessionId, {
      httpOnly: true,
    });
    return res.send();
  } catch (error) {
    return res.status(401).send();
  }
});
//autenticacion para obtener
authSessionRouter.get("/profile", (req, res) => {
  const { cookies } = req;
  if (!cookies.sessionId) return res.sendStatus(401);
  const usersession = sessions.find(
    (session) => session.sessionId === cookies.sessionId
  );
  if (!usersession) return res.sendStatus(401);

  const user = USERS_BBDD.find((user) => user.guid === usersession.guid);

  if (!user) return res.sendStatus(401);

  delete user.password;
  return res.send(user);
});

export default authSessionRouter;
