import { USERS_BBDD } from "../bbdd.js";

const checkEmailPassword = (email, password) => {
  const user = USERS_BBDD.find((user) => user.email === email);

  if (!user) throw new Error();
  if (user.password !== password) throw new Error(); //validamos que la contrasenia de la bd es la misma que la del usuario
  return user;
};

export default checkEmailPassword;
