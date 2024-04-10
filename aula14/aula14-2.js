const readlineSync = require('readline-sync');

const frase = readlineSync.question("subi num onibus em marrocos");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);
