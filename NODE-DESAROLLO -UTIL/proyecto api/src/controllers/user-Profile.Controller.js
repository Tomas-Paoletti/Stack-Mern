import UserModel from "#Schemas/user.schema.js"
// siempre buscar primero email y luego contrasenioa debido a la craga al hashear


const userProfileController = async (req, res)=>{
const {id} = req


const existingUserById =await UserModel.findById(id).exec()
if (!existingUserById) return res.status(401).send("Usuario no autorizado ssd")

const {_id, name ,surname,email}= existingUserById

return res.send({_id, name ,surname,email})


}


export default userProfileController