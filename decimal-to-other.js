var convertCharToCode = require('./convert-code-to-char.js');

function decimalToOther(numero,base){

  var resultInteiro = "";
  var inteiro = Math.floor(numero);

  while (inteiro != 0) {
    var q = inteiro % base;
    resultInteiro = convertCharToCode(q) + resultInteiro;
    inteiro = (inteiro - q) / base;
  }

  var result = resultInteiro;

  return result;
}

console.log(decimalToOther(2324,16));
