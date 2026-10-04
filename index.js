
// EJERCICIO 1: Operaciones con números
const num1 = 25
const num2 = 7

//Suma
console.log (num1 + num2)

// Resta
console.log(num1 - num2)

// Multiplicación
console.log(num1*num2)

// División
console.log(num1/num2)

// Módulo (Resto) 
console.log(num1 % num2)

// EJERCICIO 2: Concatenación de strings y template literals
const nombre = "Javier"
const ciudad = "Ávila"
const saludo1 = "Hola, soy " + nombre + " y soy de " + ciudad + "."
const saludo2 = `Hola, soy ${nombre} y soy de ${ciudad}.`

console.log(saludo1)
console.log(saludo2)

// EJERCICIO 3: Propiedades de strings

const palabra1 = "JavaScript"
const palabra2 = "Python"
console.log(`La palabra "JavaScript" tiene ${palabra1.length} caracteres.`)
console.log(`La palabra "Python" tiene ${palabra2.length} caracteres.`)

let palabraMasLarga = ""

if (palabra1.length > palabra2.length) {
    palabraMasLarga += palabra1
} else {
    palabraMasLarga += palabra2
}

console.log(`La palabra más larga es: ${palabraMasLarga}.`)

// EJERCICIO 4: Bucle for — Números del 1 al 20

for (let i = 1; i <= 20; i++) {
    console.log(i)
}

// EJERCICIO 5: Números pares del 1 al 50 

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
    console.log(i)
    }
}

// EJERCICIO 6: Iterar un string carácter por carácter

const palabra = "Ironhack"

for (let i = 0; i < palabra.length; i++ ) {
    console.log(palabra[i])
}

// EJERCICIO 7: Patrón acumulados - Suma del 1 al 100

let suma = 0

for (let i = 1; i <= 100; i++) {
    suma += i
}

console.log (`La suma de los números del 1 al 100 es: ${suma}`)

// EJERCICIO 8: Construir una escalera con #

let escalera = ""

for (let i = 1; i <= 7; i++) {
    escalera += "#"
    console.log(escalera)
}

// EJERCICIO 9: FizzBuzz

for (let i = 1; i <=100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log("Fizz")
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log("Buzz")
    } else if (i % 3 === 0 && i % 5 === 0 ) {
        console.log("FizzBuzz")
    } else {
        console.log(i)
    }
}

const original = "Ironhack"
let invertido = ""

for (let i = original.length - 1; i >= 0; i--) {
    let char = original[i]
    invertido += char
}
console.log(original)
console.log(invertido)