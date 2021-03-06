import { Type } from "@sinclair/typebox";
import Ajv from 'ajv'
import addFormats  from "ajv-formats";
import addErrors from 'ajv-errors'
import { emailDTOSchema, idDTOSchema, nameDTOSchema, passwordDTOSchema, surnameDTOSchema } from "#Lib/dto-types.js";
const RegisteDTOSchema = Type.Object({
    _id : idDTOSchema,
    name: nameDTOSchema,
    surname:surnameDTOSchema,
    email: emailDTOSchema,
    password: passwordDTOSchema
    
},{
    additionalProperties: false,
    errorMessage:{
        additionalProperties: 'El formato de datos enviado es incorrecto'
    }
}
)
const ajv = new Ajv({allErrors: true} )
addFormats(ajv , ['email', 'uuid']).addKeyword('kind').addKeyword('modifier')
ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)
addErrors(ajv)
const validateSchema = ajv.compile(RegisteDTOSchema) // valida el esquema y lo compila

const userRegisterDTO = (req, res, next)=>{
    const isDTOValid= validateSchema(req.body)
    if (!isDTOValid){
        return res.status(400).send({errors: validateSchema.errors.map(error => error.message)})
    }
    next()
}

export default userRegisterDTO