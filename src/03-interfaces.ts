//las interfaces en ts son una forma de definir la forma de un objeto, 
//es decir, que propiedades y metodos tiene un objeto, pero no se puede instanciar una interfaz,
//solo se puede implementar en una clase o usarla como tipo de dato

interface Person {
    id: number
    firstName: string 
    lastName: string
    age?: number //el signo de interrogacion indica que esta propiedad es opcional
}

function formatObject(persona : Person):string {
    return `
    - ID: ${persona.id} 
    - Name: ${persona.firstName} ${persona.lastName} 
    - Age: ${persona.age ?? 'N/A'}
    `
}

const person1: Person = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 30
}
console.log(formatObject(person1))

const person2: Person = {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe'
}
console.log(formatObject(person2))