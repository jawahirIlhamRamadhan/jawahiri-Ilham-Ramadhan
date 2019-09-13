var input_keyboard = require('readline-sync');

var s = parseInt(input_keyboard.question("Masukan Nilai s : "));

var volume = s*s*s;

console.log("Volume kubus = "+volume);