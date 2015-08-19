function convertCharToCode(char){
  var digitos = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/";
  var numero = digitos.indexOf(char);
  if(numero<0){
    console.log("Erro! Não coloque uma string fora da cadeia de characteres");
    process.exit(1);
  }
  return numero;
}
