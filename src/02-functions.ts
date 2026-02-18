//las funciones en ts son algo asi 
function add(a: number, b: number) : number {
    return a + b
}

console.log(add(2, 3)) //5

//tambien se pueden escribir como funciones anonimas
const subtract = function(a: number, b: number) : number {
    return a - b
}

console.log(subtract(5, 2)) //3

//tambien se pueden escribir como funciones flecha
const multiply = (a: number, b: number) : number => {
    return a * b
}

console.log(multiply(2, 3)) //6

//tambien se pueden escribir como funciones flecha de una sola linea
const divide = (a: number, b: number) : number => a / b
console.log(divide(6, 2)) //3

//tambien se pueden escribir como funciones con parametros opcionales
function greet(name: string, greeting?: string) : string {
    if (greeting) {
        return `${greeting}, ${name}!`
    } else {
        return `Hello, ${name}!`
    }
}
console.log(greet("Alice")) //Hello, Alice!
console.log(greet("Bob", "Hi")) //Hi, Bob!
//tambien se pueden escribir como funciones con parametros por defecto
function greetWithDefault(name: string, greeting: string = "Hello") : string {
    return `${greeting}, ${name}!`
}
console.log(greetWithDefault("Alice")) //Hello, Alice!
console.log(greetWithDefault("Bob", "Hi")) //Hi, Bob!

//al igual que en js los ; son opcionales en ts, pero es recomendable usarlos para evitar errores de sintaxis