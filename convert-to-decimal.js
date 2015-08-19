//para entender o calculo, https://pt.wikipedia.org/wiki/Convers%C3%A3o_de_base_num%C3%A9rica#Convers.C3.A3o_de_bin.C3.A1rio_para_decimal

var convertCharToCode = require('./convertCharToCode.js');

function convertToDecimal(string,base){
  string.replace(/^0+(?!\.|$)/, ''); //removendo 0's a esquerda com expressão regular (oh yeah!)
  var arrayChar = string.split(''); //converte a string em um array de caracteres

  var numero = 0; //inicia um numero com o valor de 0, para ser subtraido

  for(var x=arrayChar.length-1;x>=0;x--){  //contagem regressiva para ser elevada
    //arrayChar.length é usado para contar a quantidade de itens no array
    var charDecimal = convertCharToCode(arrayChar[(arrayChar.length-1)-x]); //usa a função para converter possiveis caracteres para um numero
    if(charDecimal>=base){
      console.log("Erro: seu número não está nessa base numérica.");
      process.exit(1);
    }
    var preNumero = charDecimal * Math.pow(base,x); //cada preNumero é o resultado da formula feita para converter o numero. Math.pow() é usada para elevar um número de forma mais fácil
    numero += preNumero; //o preNumero é somado ao numero final, dando o resultado.
    //console.log(charDecimal+"*"+base+"^"+x+" = "+preNumero); //em caso de debug, retire o comentário dessa linha, para saber como a formula funciona
  }

  return numero; //retorna o numero final, convertido na base decimal
}

console.log(convertToDecimal('10',2));
