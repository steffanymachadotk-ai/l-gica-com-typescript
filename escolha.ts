const readline = require('readline-sync'); // Corrigido o erro TS1295 (Voltamos ao require)

console.clear();

let loop: boolean = true;
let preco: number = 0;
const combos: string[] = ['Pet Coca + Bomba', 'Pet Guaraná + Bomba', 'Café + Bolo', 'Café com Leite'];

let comboSelecionado: string[] = []; 
let valores: number[] = [];

while(loop){
  console.log("Combo para o lanche:");
  
  combos.forEach((combo, index) => console.log(`${index + 1} - ${combo}`));

  // CORRIGIDO erro TS2322: Agora o tipo bate perfeitamente com questionInt()
  const opcoes: number = readline.questionInt("\nDigite a sua opção: ");

  // CORRIGIDO erro TS2678 e TS2345:
  // Usamos "?? ''" para garantir ao TS que, se o combo não existir, ele envia um texto vazio.
  switch(opcoes){
    case 1:
      comboSelecionado.push(combos[opcoes - 1] ?? "Combo Inválido");
      preco = 10.50;
      valores.push(preco);
      break;
    case 2:
      comboSelecionado.push(combos[opcoes - 1] ?? "Combo Inválido"); 
      preco = 10;
      valores.push(preco);
      break;
    case 3:
      comboSelecionado.push(combos[opcoes - 1] ?? "Combo Inválido");
      preco = 7.50;
      valores.push(preco);
      break;
    case 4:
      comboSelecionado.push(combos[opcoes - 1] ?? "Combo Inválido");
      preco = 2.50;
      valores.push(preco);
      break;
    default:
      console.log("Ops! Opção inválida informe número de 1 a 4");
      break;
  }

  const parar = readline.questionInt("\nDeseja algo a mais?\n1 - Sim | 2 - Não\nOpção escolhida: ");
  loop = parar !== 2;
}

console.clear();
console.log("===================================");
console.log("      RESUMO DO PEDIDO       ");
console.log("===================================");

// CORRIGIDO erro TS2532:
// Adicionamos o "?? 0" e garantimos strings seguras para o console não reclamar de possíveis undefineds
for (let i = 0; i < comboSelecionado.length; i++) {
    const nomeCombo = comboSelecionado[i] ?? "Desconhecido";
    const valorCombo = valores[i] ?? 0;
    console.log(`${nomeCombo} ......... R$ ${valorCombo.toFixed(2)}`);
}

console.log("===================================");

const totalAcumulado = valores.reduce((acc, valor) => acc + valor, 0);

console.log(`Você selecionou ${valores.length} item(ns)`);
console.log(`Seu total é de R$ ${totalAcumulado.toFixed(2)}`);
