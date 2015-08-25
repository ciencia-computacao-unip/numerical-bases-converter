//para entender o calculo, https://pt.wikipedia.org/wiki/Convers%C3%A3o_de_base_num%C3%A9rica#Convers.C3.A3o_de_bin.C3.A1rio_para_decimal

var convertCharToCode = require('./convert-char-to-code.js');

module.exports = function (string,base){
  string.replace(/^0+(?!\.|$)/, ''); //removendo 0's a esquerda com expressão regular (oh yeah!)
  var arrayChar = string.split(''); //converte a string em um array de caracteres

  var numero = 0; //inicia um numero com o valor de 0, para ser subtraido

  var distVirgula = string.indexOf(",");
  var y = (distVirgula<0)?arrayChar.length-1:distVirgula-1;

  for(var x=0;x<arrayChar.length;x++){  //contagem regressiva para ser elevada

    if(arrayChar[x]!==","){
      //arrayChar.length é usado para contar a quantidade de itens no array
      var charDecimal = convertCharToCode(arrayChar[x]); //usa a função para converter possiveis caracteres para um numero
      if(charDecimal>=base){
        console.log("Erro: seu número não está nessa base numérica.");
        process.exit(1);
      }
      var preNumero = charDecimal * Math.pow(base,y); //cada preNumero é o resultado da formula feita para converter o numero. Math.pow() é usada para elevar um número de forma mais fácil
      numero += preNumero; //o preNumero é somado ao numero final, dando o resultado.
      //console.log(charDecimal+"*"+base+"^"+x+" = "+preNumero); //em caso de debug, retire o comentário dessa linha, para saber como a formula funciona
      y--;
    }

  }

  return numero; //retorna o numero final, convertido na base decimal
}
