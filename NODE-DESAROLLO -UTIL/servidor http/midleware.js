console.log("hola  putines");

const express = require("express");
const { ppid } = require("process");
const PORT = 3010;
const app = createExpressServer(); // aca el parametro es el puerto del servidor

app.use(express.json)
app.use(express.text)
app.listen( PORT, ()=>{
     
})