// Operadores relacionais >,<, ===, !==
// 2 > 7 = false
// 5 < 15 = true 

const a:number = 10
const b:number = 5
const c:number = 6

console.log("A > B:", a > b)
console.log("C < A:", c < a)
console.log("B = C:", b === c)

console.log("A > B AND C < A:", a > b && c < a)
console.log("B = C AND C > A:", b === c && c < a)

console.log("A > B OR C < A:", a > b || c < a)
console.log("B = C OR C < A:", b === c || c < a)
