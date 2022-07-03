const operaciones = require("./comonjs.cjs");
const {} = require("jsonwebtoken"); // las librerias solo se pone el nombre de la libreria
// si vamos a exportar un modulo de una carpeta  y en esa carpeta el archivo tiene el nombre index.js no hace falta poner el nombre de archivo solo de la carpeta
// EN COMMONJS TAMBIEN SE PUEDEN EXPORTAR JSON
import { suma, resta } from "./ecmascriptmodules.mjs";
//import suma from "./ecmascriptmodules.mjs"; este es el del default si o si tiene que ponerse como variable
console.log(operaciones);
//console.log(__dirname,__filename) el primero es la ruta hasta archivo y el segundo de la carpeta actual en la que se encuentra el archivo
