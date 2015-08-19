// para executar com o nodejs apenas execute no terminal 'node getcharcode.js 10' ou qualquer outro número para ver o que ele retorna
var number = parseInt(process.argv[2]) + 48;
var chr = String.fromCharCode(number);
console.log(chr);
