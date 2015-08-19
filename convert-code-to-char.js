function convertCodeToChar(code){
  if(code>=64){
    console.log("Erro! Não coloque um número maior ou igual a 64");
    process.exit(1);
  }
  var digitos = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/";
  var char = digitos.charAt(code);
  return char;
}
