var convertCodeToChar = require('./convert-code-to-char.js');

function decimalToOther(numero,base){

  var resultInteiro = "";
  var resultFracionario = "";

  var inteiro = Math.floor(numero);
  var fracionario = Number("."+(numero+"").split(".")[1]);

  while (inteiro != 0) {
    var q = inteiro % base;
    resultInteiro = convertCodeToChar(q) + resultInteiro;
    inteiro = (inteiro - q) / base;
  }

  var fracionarioTemp = fracionario;
  var x=0;
  while (x<=50 && !isNaN(fracionarioTemp)){
    var q = fracionarioTemp * base;
    resultFracionario = resultFracionario + convertCodeToChar(Math.floor(q));
    fracionarioTemp = Number("."+(q+"").split(".")[1]);
    x++;
  }

  var result = resultInteiro + ((fracionario)?"." + resultFracionario:"");

  return result;
}

console.log(decimalToOther(749.97,8));
