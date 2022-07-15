//autenticacion comprobar si es quien dice ser(identificar usuario)
//autorizacion:  si tiene acceso a cada privilegio de la aplicacion

console.log("hola  putines");
import dotenv from "dotenv";
dotenv.config(); // con esto nos toma el archivo .env
import express from "express";
import cookieParser from "cookie-parser";
import accountRouter from "./routes/account.js";
import authSessionRouter from "./routes/auth_session.js";
import authTokenRouter from "./routes/auth_token.js";
import authRouter from "./routes/auth.js";
import mongoose from "mongoose";

const PORT = process.env.PORT;
const app = express(); // aca el parametro es el puerto del servidor
app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use("/account", accountRouter);
app.use("/auth", authRouter);
app.use("/auth_session", authSessionRouter);
app.use("/auth_token", authTokenRouter);
//obtener datos de una cuenta del guid
app.get("/raiz", (req, res) => {
  res.send();
});

const bootstrap = async () => {
  //funcion para ejecutar el inicio del servidor y la base de datos ya que la conexion ala base de datos es asincrona
  await mongoose.connect(process.env.MONGODB_URL);
  app.listen(PORT, () => {
    console.log(`puerto en ${PORT}`);
  });
};

bootstrap();
