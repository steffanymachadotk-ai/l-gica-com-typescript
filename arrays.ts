let frutas:string[] = ['Morango', 'Banana', 'Pera', 'Uva', 'Abacaxi'];

console.log("Frutas", frutas)
console.log("Frutas", frutas[1])
console.log("Tamanho do arrays", frutas.length)
console.log("Último elemento: ", frutas[frutas.length - 1])

// Carregar a lista

frutas[2] = "Melancia"
//frutas.push("Limão") add na última posição
//frutas.unshift("Melão") add na primeira posição
//frutas.sort(); organiza os elementos em ordem alfabética
frutas.pop() // remove o último elemento do array
frutas.shift() // remove o primeiro elemento do array

for(let i = 0; i < frutas.length; i++) {
	console.log(`${ i + 1 } - ${frutas[i]} `)
}
