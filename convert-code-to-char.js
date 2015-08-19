function convertCodeToChar(code){

  var digitos = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/";
  var char = digitos.charAt(code);
  return char;
}
