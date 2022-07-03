// con la extension cjs fuerzo al archivo para que se ejecute con commonsjs


const suma = (n1, n2) => {
  return n1 + n2;
};

const resta = (n1, n2) => {
  return n1 - n2;
};

const multiplicacion = (n1, n2) => {
  return n1 * n2;
};

//console.log(module); muestra la info del archivo entre ellos los modulos a exportar
 module.exports = {suma,resta,multiplicacion}