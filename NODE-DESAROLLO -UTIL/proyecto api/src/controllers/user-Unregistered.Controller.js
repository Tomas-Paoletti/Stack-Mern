import UserModel from "#Schemas/user.schema.js"
// siempre buscar primero email y luego contrasenioa debido a la craga al hashear
import { compare } from "bcrypt"

const userUnregisteredEmailController = async (req, res)=>{
const {id} = req
const{   password} = req.body


const existingUserById =await UserModel.findById(id).exec()
if (!existingUserById) return res.status(401).send("Usuario no autorizado ")

const checkPassword =await compare(password, existingUserById.password)
if (!checkPassword) return res.status(401).send("Usuario incorrectas")

await existingUserById.delete()

await existingUserById.save()
return res.send("usuario eliminado")


}


export default userUnregisteredEmailController