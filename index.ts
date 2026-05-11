const tela = require('readline-sync')
// pergunta o nome da pessoa
const nome:string = tela.question('Qual é o seu nome? ')
const anoNasc = tela.question('Qual o ano do seu nascimento?')
const idade:number = 2026 - anoNasc
console.log('Olá, '+ nome +' a sua idade é '+ idade + ' anos.')
