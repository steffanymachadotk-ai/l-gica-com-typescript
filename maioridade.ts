const readline = require('readline-sync');

console.clear();

const idade:number = Number(readline.question('Digite sua idade: '));
let situacao = "";


if(idade >= 18) {
   situacao = "Maior de Idade";
} else {
  situacao = "Menor de Idade";
}

console.log(`Você é ${situacao}`);
