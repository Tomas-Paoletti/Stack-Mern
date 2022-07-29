import UserModel from "#Schemas/user.schema.js"
// siempre buscar primero email y luego contrasenioa debido a la craga al hashear
import { compare,hash } from "bcrypt"

const userUpdatePasswordController = async (req, res)=>{
const {id} = req
const{OldPassword, NewPassword} = req.body



const existingUserById =await UserModel.findById(id).exec()
if (!existingUserById) return res.status(401).send("Usuario no autorizado ")

const checkPassword =await compare(OldPassword, existingUserById.password)
if (!checkPassword) return res.status(401).send("Usuario incorrectas")
const hashedPassword = await hash(NewPassword, 12)
existingUserById.password = hashedPassword

await existingUserById.save()
return res.send("contrasenia del usuario actualizado")


}


export default userUpdatePasswordController