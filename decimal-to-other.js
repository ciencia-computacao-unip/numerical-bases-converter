var convertCodeToChar = require('./convert-code-to-char.js');

function decimalToOther(numero,base){

  var resultInteiro = "";
  var restultFracionario = "";

  var inteiro = Math.floor(numero);
  var fracionario = Number("."+(numero+"").split(".")[1]);

  while (inteiro != 0) {
    var q = inteiro % base;
    resultInteiro = convertCodeToChar(q) + resultInteiro;
    inteiro = (inteiro - q) / base;
  }

  var result = resultInteiro + ((fracionario)?"." + restultFracionario:"");

  return result;
}

console.log(decimalToOther(2324,16));
