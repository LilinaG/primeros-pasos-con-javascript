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

function saludar(name) {
    let mensaje = "Hola, " + name;
    console.log(mensaje);
  }
  const saludo = saludar("Liliana");
  

//Crear función que reciba como parámetros 2 números y que devuelva la suma de ellos 

function suma(a=5, b=5){
    return a + b;
}
const resultado = suma();
console.log(resultado);



//Crear función que determine si un número es par o impar.
let numero; //Primero se declara la variable llamada número.
numero = prompt("Introducir numero") // Con prompt se muestra una ventana emergente, solicitando al usuario que introduzca un número y ese número ingresado se asigna a la variable "número"creada.
if(numero % 2 == 0) // Se verifica si el numero ingresado es divisible por dos utilizando el operador %. Si el resto de la división es igual a 0 entonces es un número par.
document.write("El número" + numero + "es par")// Si el número es par, se utiliza el método de "document.write() para mostrar en el navegador el mensaje "El numero[] es par.
else{ //si el número no es par, es decir el resto de la división no es cero, se ejecuta el bloque de código dentro del "else" y se mostraría el mensaje "El número es impar"
    document.write("El número" + numero+ "es impar")
}

// Crear un objeto coche haciendo la abstracción de sus atributos y un objeto anidado.

const coche = {
    marca: "volkswagen",
    modelo: "golf",
    color: "blanco",
    condutor: {
        nombre: "raul",
        edad: 40,
    }
}
console.log(coche);
// Crear una función que devuelva la marca del carro.
