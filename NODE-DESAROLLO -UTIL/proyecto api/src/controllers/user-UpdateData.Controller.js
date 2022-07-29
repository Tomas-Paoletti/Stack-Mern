import UserModel from "#Schemas/user.schema.js"
// siempre buscar primero email y luego contrasenioa debido a la craga al hashear


const userUpdateDataController = async (req, res)=>{
const {id} = req
const{  name, surname} = req.body


const existingUserById =await UserModel.findById(id).exec()
if (!existingUserById) return res.status(401).send("Usuario no autorizado ")



existingUserById.name = name
existingUserById.surname = surname
await existingUserById.save()
return res.send("usuario actualizado")


}


export default userUpdateDataController