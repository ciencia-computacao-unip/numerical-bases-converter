var digitos = require('./digitos.js');

module.exports = function (code){
  if(code>=64){
    console.log("Erro! Não coloque um número maior ou igual a 64");
    process.exit(1);
  }
  var char = digitos.charAt(code);
  return char;
}
