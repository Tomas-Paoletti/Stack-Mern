import { Router } from "express";
import checkEmailPassword from "../helpers/checkEmailPassword.js";
import { SignJWT, jwtVerify } from "jose";
import { USERS_BBDD } from "../bbdd.js";
import validateLoginDTO from "../dto/validateLogin.js";
const authTokenRouter = Router();

authTokenRouter.post("/login",  validateLoginDTO,async (req, res) => {
 
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).send();
  try {
    const { guid } = checkEmailPassword(email, password);

    const jwtConstructor = new SignJWT({ guid }); // dentro de la funcion SignJWT estan los datos que va a guardar el token
    const encoder = new TextEncoder();
    const jwt = await jwtConstructor
      .setProtectedHeader({
        alg: "HS256",
        typ: "JWT" /*el primero es el algoritmo, tipo de token */,
      })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(encoder.encode(process.env.JWT_PRIVATE_KEY)); //por este sign esta eel await
    // esto lleva una promesa por eso el await
    return res.send({ jwt });
  } catch (error) {
    return res.status(401).send();
    s;
  }
});

//autenticacion para obtener para ver si el token es el creado
authTokenRouter.get("/profile", async (req, res) => {
  const { authorization } = req.headers; // cabecera en las cuales estan los tokens

  if (!authorization) return res.sendStatus(401);

  try {
    const encoder = new TextEncoder();
    const { payload } = await jwtVerify(
      authorization,
      encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    const user = USERS_BBDD.find((user) => user.guid === payload.guid);
    //Token

    if (!user) return res.sendStatus(401);

    delete user.password;
    return res.send(user);
  } catch (error) {
    return res.sendStatus(401);
  }
});
export default authTokenRouter;
