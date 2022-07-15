import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  _id: String,
  name: String,
}); // funcion a la que se la pasa un objeto para guardarse en la base de datos
const userModel = mongoose.model("User", userSchema); // nos permite usar el schema

export default userModel;
