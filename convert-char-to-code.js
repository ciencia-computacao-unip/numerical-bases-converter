function convertCharToCode(char){
  var digitos = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/";
  var numero = digitos.indexOf(char);

  return numero;
}
