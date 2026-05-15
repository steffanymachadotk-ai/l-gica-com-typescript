const readline = require('readline-sync');

console.clear();

const SENHA_CORRETA_SISTEMA:string = "MinhaSenhaSuperSegura123";
const senha:string = readline.question('Digite a sua senha: ');
let validacao = "";

const tamanhoValido = senha.length >= 8 && senha.length <= 32;
const temMaiuscula = /[A-Z]/.test(senha);

if(!tamanhoValido) {
  validacao = "A senha deve conter entre 8 e 32 caracteres.";
} else if (!temMaiuscula) {
  validacao = "A senha deve conter pelo menos uma letra maiúscula.";
} else if (senha !== SENHA_CORRETA_SISTEMA) {
  validacao = "Senha incorreta!";
} else {
  validacao = "Senha válida! Acesso concedido.";
}

console.log(validacao);

