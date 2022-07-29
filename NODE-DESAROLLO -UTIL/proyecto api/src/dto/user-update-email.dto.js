import { Type } from "@sinclair/typebox";
import Ajv from 'ajv'
import  AddFormats from "ajv-formats";
import addErrors from 'ajv-errors'
import { emailDTOSchema,  passwordDTOSchema } from "#Lib/dto-types.js";
const UpdateEmailDTOSchema = Type.Object({
   
    email: emailDTOSchema,
    password: passwordDTOSchema
    
},{
    additionalProperties: false,
    errorMessage:{
        additionalProperties: 'El formato de datos enviado es incorrecto'
    }
}
)
const ajv = new Ajv({allErrors: true} ).addKeyword('kind').addKeyword('modifier')
ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)

AddFormats(ajv, ['email'])

addErrors(ajv)
const validateSchema = ajv.compile(UpdateEmailDTOSchema) // valida el esquema y lo compila

const userUpdateEmailDTO = (req, res, next)=>{
    const isDTOValid= validateSchema(req.body)
    if (!isDTOValid){
        return res.status(400).send({errors: validateSchema.errors.map(error => error.message)})
    }
    next()
}
export default userUpdateEmailDTO
