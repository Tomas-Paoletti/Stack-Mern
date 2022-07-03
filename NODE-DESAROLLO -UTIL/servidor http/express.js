//en la url : puerto , ? query # hash
console.log("hola  putines");
const { createServer } = require("http");
const createExpressServer = require("express");
const express = require("express");
const { ppid } = require("process");
const PORT = 3010;
const app = createExpressServer(); // aca el parametro es el puerto del servidor

app.use(express.json());
app.get("/mi-cuenta/:id", (req, res) => {
  // el : lo que nos hace es sacar el parametro de la url
  console.log(req.params.id); // nos muestra el valor que extrae de la url
  res.send; // siempre se debe responder por que sino se queda en bucle

  // el : lo que nos hace es sacar el parametro de la url
  // console.log(req.params.id); // nos muestra el valor que extrae de la url
  console.log(req.get("Accept")); // el get es para buscar un header en especifico y el req.headers trae todos
  //  res.status(401).send({ responde con un status http
  //   errorMesage: "No autorizado",
  // });
});
app.post("/mi-cuenta", (req, res) => {
  console.log(req.body);
  res.send()
});

app.put("/producto",(req,res)=>{
  console.log(req.query);
  res.send()
})
app.post("/mi-cuenta", (req, res) => {
  res.send(" tu cuenta XD");
});
/*
app.all('/mi-cuenta',  (req,res)=>{ todos los verbos http utiliza
    res.send(' tu cuenta XD')
})*/
app.listen(PORT, () => {
  console.log(`servidor levantado en el ${PORT}`);
});

const httpServer = createServer((req, res) => {});
