var otherToDecimal = require('./other-to-decimal.js');
var decimalToOther = require('./decimal-to-other.js');

function converter (numero, baseAtual, baseResposta){
  return decimalToOther(otherToDecimal(numero,baseAtual),baseResposta);
}

console.log(converter("80F9A111,CA7244AC5EAB",16,2));
console.log("10000000111110011010000100010001.1100101001110010010001001010110001011101");
