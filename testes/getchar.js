// para executar com o nodejs apenas execute no terminal 'node getchar.js 10' ou qualquer outro número para ver o que ele retorna

var number = parseInt(process.argv[2]);
var digitos = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/";
var chr = digitos.charAt(number);
console.log(chr);
