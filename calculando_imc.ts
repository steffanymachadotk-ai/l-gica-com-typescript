const readline = require('readline-sync');

console.clear();

let loop:boolean = true

while(loop) {
  const nomePeople:string = readline.question('Informe o seu nome: ');
  const peso:number = Number(readline.question('Informe o seu peso: '));
  const altura:number = Number(readline.question('Informe a sua altura: '));
  let classificacao:string = "";

  const imc = peso / (altura * altura);

  if (imc < 18.5) {
  classificacao = "Baixo Peso";
  } else if (imc >= 18.5 &&  imc < 25) {
  classificacao = "Peso Normal";
  } else if (imc >= 25 && imc < 30) {
  classificacao = "Excesso de Peso";
  } else {
  classificacao = "Obesidade";  
  }

  console.log(`Olá, ${nomePeople}! Seu imc é de ${imc.toFixed(2)} e sua classificação é ${classificacao}`);
  const continuar = readline.question('Deseja continuar? S - Sim | N - Não: ');

  if (continuar.toUpperCase() === 'N') {
    loop = false
  }
}
