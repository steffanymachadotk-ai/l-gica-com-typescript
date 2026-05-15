const readline = require('readline-sync');

console.clear()

const numero:number = Number(readline.question('Digite um número: '));
let resultado:string = "";


if(numero % 2 == 0) {
  resultado = "Par";
} else {
  resultado = "Ímpar";
}
console.log(`O numero digitado é: ${resultado}`);
