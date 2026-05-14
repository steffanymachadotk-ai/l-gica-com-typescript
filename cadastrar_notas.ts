const readline = require('readline-sync');

// Limpar a tela
console.clear();

// Formulário de captura de informações
// O readline-sync permite capturar dados do terminal em tempo real
const nomeAluno:string = readline.question('Informe o nome do aluno ');
const nota1:number = Number(readline.question('Informe a primeira nota '));
const nota2:number = Number(readline.question('Informe a segunda nota '));
const nota3:number = Number(readline.question('Informe a terceira nota '));
const numeroFaltas:number = Number(readline.question('Informe a quantidade de faltas: '))
let situacao:string = "";

// A regra, media >= 7 aprovado, caso contrário, reprovado
// E a quantidade de faltas < 5 npx ts-node

// Cálculo de média aritmética
const media = (nota1 + nota2 + nota3) / 3;

if(media >= 7 && numeroFaltas < 5) {
  situacao = "Aprovado";
} else if (media >=5 && media < 7 && numeroFaltas < 3) {
  situacao = "Recuperação";
} else {
  situacao = "Reprovado";
}

// Exibição final com Template Strings (usando a crase `)
// .toFixed(2) limita o resultado para duas casas decimais
console.log(`Olá, ${nomeAluno}! Sua média é de ${media.toFixed(2)} e um total de ${numeroFaltas} faltas, sua situação é de ${situacao}`);
