//en la url : puerto , ? query # hash
console.log("hola  putines");
const { createServer } = require("http");
const express= require('express')



const httpServer = createServer((req, res) => {
  console.log("servidor creado");

  //Falata verbo/metodo para indicar que quiere hacer el  cliente
  console.log(req.method); // metodo verbo http
  //falta la ruta para identificar el recurso
  console.log(req.url); // path o ruta
  //faltan los headers
  console.log(req.headers); // las cabeceras vienen en misnusculas
  // falta el body
  let data = "";
  let chuckindex = 0;
  req.on("data", (chunk) => {
    data += chunk;
    chuckindex++;
    console.log(chuckindex);
  });
  //req.on("end");
  console.log("hola" + data);
  res.end("respuesta listening");
});

httpServer.listen(3000); // aca el parametro es el puerto del servidor
