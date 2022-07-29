import UserModel from "#Schemas/user.schema.js"
// siempre buscar primero email y luego contrasenioa debido a la craga al hashear

import { compare } from "bcrypt"
import { SignJWT } from "jose"

const userLoginController = async (req, res)=>{
const {  email,password} = req.body


const existingUserByEmail =await UserModel.findOne({email}).exec()
if (!existingUserByEmail) return res.status(401).send("Credenciales incorrectas")

const checkPassword =await compare(password, existingUserByEmail.password)
if (!checkPassword) return res.status(401).send("Credenciales incorrectas")
 
const JWTConstructor = new SignJWT({id:existingUserByEmail._id})// con esto guardamos el id en el token

const encoder = new TextEncoder()
const jwt = await JWTConstructor.setProtectedHeader({alg:'HS256',type:'JWT'}). setIssuedAt().setExpirationTime('7d').sign(encoder.encode(process.env.JWT_PRIVATE_KEY))
return res.send({jwt})// cargamos el token a la cabecera
}


export default userLoginController