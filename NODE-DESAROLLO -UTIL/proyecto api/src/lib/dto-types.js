/* eslint-disable no-undef */

import { Type } from "@sinclair/typebox"

// este archico los que nos facilitara es el schema de cada uno de los elementos del perfil para validar los datos
// eslint-disable-next-line no-undef
export const idDTOSchema= Type.String({
    format:'uuid',
    errorMessage : {
        type: 'El tipo de _id no es valido, debe ser un string',
        format: 'El formato de _id no es valido debe ser un uuid4'
    }
})
export const nameDTOSchema= Type.String({
    minLength: 2,
    maxLength:20 ,
 errorMessage : {
    minLength: 'EL nombre debe tener al menos 2 caracteres',
    maxLength: 'El nombre debe tener un maximo de 20 palabras'
 }})
export const surnameDTOSchema= Type.String({
    minLength: 4,
    maxLength: 50 ,
 errorMessage : {
    minLength: 'EL apellido  debe tener al menos 4 caracteres',
    maxLength: 'El apellido debe tener un maximo de 50 palabras'
   
 }})
 export const emailDTOSchema= Type.String({
        
    format:'email',
    errorMessage : {
        type: 'El tipo de el email no es valido, debe ser un string',
        format: 'El formato del email no es valido '
    }})
export const passwordDTOSchema= Type.String({
    format: 'password',
    minLength: 10,
    maxLength: 24,
    errorMessage: {
        type: 'El tipo de la contrasenia no es valido, debe ser un string',
        format: 'El formato de la contrasenia  no es valido , debe contner una mayuscula una misnuscula y un numero',
        minLength: 'la contrasenia  debe tener al menos 10 caracteres',
        maxLength: 'la contrasenia debe tener un maximo de 24 palabras'

    }
})