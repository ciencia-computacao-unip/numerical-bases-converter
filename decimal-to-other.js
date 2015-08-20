var convertCharToCode = require('./convert-code-to-char.js');

function decimalToOther(numero,base){
  var result = "";
  while (numero != 0) {
    var q = numero % base;
    result = convertCharToCode(q) + result;
    numero = (numero - q) / base;
  }
  return result;
}

console.log(decimalToOther(2324,16));
