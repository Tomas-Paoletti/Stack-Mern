import { Type } from "@sinclair/typebox";
import Ajv from 'ajv'
import addErrors from 'ajv-errors'
import {   passwordDTOSchema } from "#Lib/dto-types.js";
const UpdatePasswordDTOSchema = Type.Object({
   
    OldPassword: passwordDTOSchema,
    NewPassword: passwordDTOSchema
    
},{
    additionalProperties: false,
    errorMessage:{
        additionalProperties: 'El formato de datos enviado es incorrecto'
    }
}
)
const ajv = new Ajv({allErrors: true} ).addKeyword('kind').addKeyword('modifier')
ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)

addErrors(ajv)
const validateSchema = ajv.compile(UpdatePasswordDTOSchema) // valida el esquema y lo compila

const userUpdatePasswordDTO = (req, res, next)=>{
    const isDTOValid= validateSchema(req.body)
    if (!isDTOValid){
        return res.status(400).send({errors: validateSchema.errors.map(error => error.message)})
    }
    next()
}

export default userUpdatePasswordDTO