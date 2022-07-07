import {Router} from "express"
import checkEmailPassword from "../helpers/checkEmailPassword.js"
import { SignJWT } from "jose";
const authTokenRouter = Router()

authTokenRouter.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) return res.status(400).send();
    try {
      const user = checkEmailPassword(email, password);
      return res.send(`Usuario ${user.name} autenticado`);
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
  export default authTokenRouter