//A diferencia de JS, TS es mas parecido a C con el tema de las variables 
// es decir que en TS se debe declarar el tipo de variable que se va a usar,
//  esto es para evitar errores de tipo en tiempo de compilacion,
//  ademas de que TS es un superconjunto de JS,
//  lo que significa que cualquier codigo JS es valido en TS, pero no al reves.

//declaracion de variables en TS
let nombre: string = 'Juan'
console.log(nombre)

const edad: number = 30 
console.log(edad)

//TS tiene un tipo de dato llamado any, que permite asignar cualquier tipo de valor a una variable,
// pero esto no es recomendable ya que pierde la ventaja de tener un sistema de tipos fuerte.
let cualquierValor: any = 'Hola'
console.log(cualquierValor)
cualquierValor = 123
console.log(cualquierValor)