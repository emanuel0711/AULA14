const readlineSync = require('readline-sync');

const nome = readlineSync.question("Qual o seu nome? ");
const email = readlineSync.question("Qual o seu email? ");

console.log("o email " +email ,'foi cadastrado com sucesso. seja bem-vindo(a), '+nome);

