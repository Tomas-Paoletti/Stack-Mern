

import { Type } from "@sinclair/typebox";
import Ajv from 'ajv'
import addErrors from 'ajv-errors'
import {  nameDTOSchema, surnameDTOSchema } from "#Lib/dto-types.js";
const UpdateDataDTOSchema = Type.Object({
   
   name: nameDTOSchema,
   surname: surnameDTOSchema
    
},{
    additionalProperties: false,
    errorMessage:{
        additionalProperties: 'El formato de datos enviado es incorrecto'
    }
}
)
const ajv = new Ajv({allErrors: true} ).addKeyword('kind').addKeyword('modifier')

addErrors(ajv)
const validateSchema = ajv.compile(UpdateDataDTOSchema) // valida el esquema y lo compila

const userUpdateDataDTO = (req, res, next)=>{
    const isDTOValid= validateSchema(req.body)
    if (!isDTOValid){
        return res.status(400).send({errors: validateSchema.errors.map(error => error.message)})
    }
    next()
}

export default userUpdateDataDTO