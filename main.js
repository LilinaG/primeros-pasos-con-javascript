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

function saludar(nombre, mensaje) {
    nombre = "Raúl"
    mensaje = "Hola, ${nombre}";
    return mensaje 
  }
  
  console.log(saludar());
  

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

// Crear una función que devuelva la marca del coche.

function obtenerMarcaCoche() {
    return coche.marca;
}
console.log(obtenerMarcaCoche());


// Crear una función que devuelva la cantidad de puertas que tiene el coche.

const coche2 = {
    marca: "volkswagen",
    modelo: "golf",
    color: "blanco",
    puertas: "5",
    condutor: {
        nombre: "Raúl",
        edad: 40,
    }
}

function contarPuertas() {
    return coche2.puertas
}
console.log(contarPuertas());

// Crear una función que devuelva un atributo del objeto anidado.

function nombrarConductor() {
    return coche2.condutor.nombre
}
console.log(nombrarConductor());

// Crear un array de 10 números.

let números = [2, 4, 9, 13, 10, 12, 14, 16, 18, 20];

console.log(números);

// Crear una función que imprima en consola todos los números de un array (Investigar ciclo for)

function mostrarNumeros(array) {   // Se crea una función que tiene por parámetro un array. La función nos imprimirá en consola todos los números del array que le pasemos.
    for (let i = 0; i < array.length; i++) {       // Con el ciclo for podemos recorrer todos los elementos del array. i < array.length verifica si el índice i es menor que la longitud del array. Si la condición es verdadera, se ejecuta. 
        console.log(array[i]);
    }
}
mostrarNumeros(números); 

// Crear una función que añada un número al array

function añadirNumero (array, numero) {
    array.push(numero); // para agregar un número al array
}

añadirNumero(números, 22);
console.log (números); 

// Crear una función que elimine los números pares de ese array.
let numeros2 = [2, 4, 9, 13, 10, 12, 14, 16, 18, 20];

function quitarPares(array) {
    let numerosImpares = array.filter(numero => numero % 2 !== 0);// verifica si cada número no es divisible por 2. Si la expresión numero % 2 !== 0
    return numerosImpares;
}
let numerosPares = quitarPares(numeros2);
console.log(numerosPares);

// Crear una función que devuelva el número mayor de un array.

let numeros3 = [2, 4, 9, 13, 10, 12, 14, 16, 18, 20];

function obtenerNumeroMayor(array) {
    return Math.max(...array);
}

let numeroMayor = obtenerNumeroMayor(numeros3);
console.log(numeroMayor);

// Crear una función que devuelva el número menor de un array.

let numeros4 = [2, 4, 9, 13, 10, 12, 14, 16, 18, 20];

function obtenerNumeroMenor(array) {
    return Math.min(...array);
}

let numeroMenor = obtenerNumeroMenor(numeros4);
console.log(numeroMenor);

// Crear un función que convierta en minúsculas todas las letras de un texto.

function convertirAMinusculas(texto) {
    return texto.toLowerCase();
}

let textoOriginal = "HOLA CODERS, ESTO ES UN EJEMPLO.";
let textoMinusculas = convertirAMinusculas(textoOriginal);
console.log(textoMinusculas);


// Crear una función que convierta en mayúsculas todas las letras de un texto.

function convertirAMayusculas(texto) {
    return texto.toUpperCase();
}

let textoOriginal2 = "hola coders este es el ejemplo contrario";
let textoMayusculas = convertirAMayusculas(textoOriginal2);
console.log(textoMayusculas);

// Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula.

let friends = ['cristina', 'arantxa', 'diego', 'arturo'];

function convertirPrimeraLetraMayuscula(nombres) {
    return nombres.map(nombre => nombre.charAt(0).toUpperCase() + nombre.slice(1));
}

let friendsMayusculas = convertirPrimeraLetraMayuscula(friends);
console.log(friendsMayusculas);

// Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.

const button = document.getElementById("boton");
button.addEventListener('click', function() {
    alert('¡Lo has conseguido!');
  });