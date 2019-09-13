var input_keyboard = require("readline-sync");

var Alas = parseInt(input_keyboard.question("Masukan Nilai a : "));
var Tinggi = parseInt(input_keyboard.question("Masukan Nilai t : "));
var luas = 1/2*Alas*Tinggi

console.log("luas segitiga = "+luas);