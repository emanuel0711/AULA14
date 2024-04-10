
let listaDeTarefas=[]

const readlineSync = require('readline-sync');
const pergunta1 = readlineSync.question("qual a sua tarefa?1 ");

const pergunta2 = readlineSync.question("qual sua tarefa?2 ");

const pergunta3 = readlineSync.question("qual sua tarefa?3");

listaDeTarefas.push(fazertarefa1,listaDeTarefas2,listaDeTarefas3)


console.log(listaDeTarefas)

const pergunta = readlineSync.question("qual tarefa voce ja realizou? ");

listaDeTarefas.splice(pergunta,1)
console.log(listaDeTarefas)

