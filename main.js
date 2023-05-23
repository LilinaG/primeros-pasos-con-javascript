// Variable numérica
let age = 44;
console.log(age);

// Ejemplo de variable con cadena

let name = "Liliana"
console.log(name);

let lastname = "Gutiérrez";
console.log(lastname);


// Ejemplo de variable con dato booleano
let boolean1 = true;
let boolean2 = false;
console.log (boolean1);
console.log (boolean2);


// Ejemplo de operaciones matemáticas: suma, resta, multiplicación y división.
let a = 2
let b = 4

let add = a + b;
console.log(add);

let multi = a*b
console.log (multi);

let subtra = b - a;
console.log(subtra);

let div = 4/2;
console.log (div);

// Concatenar variables tipo texto.

let fullname = name + lastname;
console.log(fullname);

// Crear una función que imprima mensaje "Hola, [nombre]" con un parámetro para el nombre."


function saludar(nombre) {
   return "Hola" + nombre;
}
saludar("Liliana");
  

//Crear función que reciba como parámetros 2 números y que devuelva la suma de ellos 

function suma (numero1, numero2){
    let resultado = numero1 + numero2
    return resultado
}
suma(10, 12)
//Crear función que determine si un número es par o impar.
let numero;
numero = prompt("Introducir numero")
if(numero % 2 == 0)
document.write("El número" + numero + "es par")
else{
    document.write("El número"+ numero+ "es impar")
}
