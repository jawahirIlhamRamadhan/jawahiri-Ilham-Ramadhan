var input_keyboard = require('readline-sync');

var pi = 3.14;
var r = parseInt(input_keyboard.question("Masukan nilai r : "));

var keliling = 2*pi*r;

console.log("keliling lingkaran = "+keliling);