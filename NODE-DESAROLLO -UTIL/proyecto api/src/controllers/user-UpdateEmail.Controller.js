import UserModel from "#Schemas/user.schema.js"
// siempre buscar primero email y luego contrasenioa debido a la craga al hashear
import { compare } from "bcrypt"

const userUpdateEmailController = async (req, res)=>{
const {id} = req
const{  email, password} = req.body


const existingUserById =await UserModel.findById(id).exec()
if (!existingUserById) return res.status(401).send("Usuario no autorizado ")

const checkPassword =await compare(password, existingUserById.password)
if (!checkPassword) return res.status(401).send("Usuario incorrectas")

existingUserById.email = email

await existingUserById.save()
return res.send("email del usuario actualizado")


}


export default userUpdateEmailController