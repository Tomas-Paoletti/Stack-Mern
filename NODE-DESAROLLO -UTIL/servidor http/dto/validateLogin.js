import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";

const LoginDTOSchema = Type.Object(
  //forma vanilla

  {
    email: Type.String({
      format: "email",
      errorMessage: {
        type: "el mail  debe ser un String",
        format: "Debe tener un correo electronico valido",
      },
    }),
    password: Type.String({
      errorMessage: {
        type: " la contrasenia debe ser un string",
      },
    }),
  },
  {
    additionalProperties: false,
    errorMessage: {
      additionalProperties: "Se ha enviado una variable de mas",
    },
  }
);

const ajv = new Ajv({ allErrors: true });
addFormats(ajv, ["email"]).addKeyword("kind").addKeyword("modifier");

addErrors(ajv);
const validate = ajv.compile(LoginDTOSchema);
/*const DTOP_PROPERTY_NAMES = ["email", "password"];

const LoginDTOSchema= {//forma vanilla
    type: 'object',
    properties:{
        email:{type : 'string', formar:'email'},
        password:{type: 'string'}
        
    },
    required:['email','password'],
    additionalProperties: false

}*/
const validateLoginDTO = (req, res, next) => {
  const isDTOvalidate = validate(req.body);

  if (!isDTOvalidate)
    res.status(400).send(ajv.errorsText(validate.errors, { separator: "/n" }));
  // if (typeof loginDTO !== "object") res.sendStatus(409);

  // const bodyPropertyNames = Object.keys(loginDTO);

  /*  const checkproperties =
    bodyPropertyNames.length === DTOP_PROPERTY_NAMES.length &&
    bodyPropertyNames.every((bodyPropertyNames) =>
      bodyPropertyNames.includes(bodyPropertyNames)
    );

  if (!checkproperties)
    res.status(400).send("El body debe contener email y password");*/
  next();
};

export default validateLoginDTO;
