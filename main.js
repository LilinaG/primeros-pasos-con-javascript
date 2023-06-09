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

function saludar(nombre){
  let saludo = `Buenos días ${nombre}`;
  console.log(saludo);
  }
  saludar("Ramon");
  

//Crear función que reciba como parámetros 2 números y que devuelva la suma de ellos 

function sumar(a, b){
  console.log(a+b);
  return(a+b);
}
sumar(23, 50);

//Crear función que determine si un número es par o impar.

function determinarParoImpar(numero){
  if (numero % 2 == 0) {
      let respuesta_par = `El ${numero} es par`;
      return respuesta_par;
  }
  else{
      let respuesta_impar = `El ${numero} es impar`;
      return respuesta_impar;
  }
}
console.log(determinarParoImpar(11));

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

function mostrarNumeros(array) {   
    for (let i = 0; i < array.length; i++) {       
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

/*function quitarPares(array) {
    let numerosImpares = array.filter(numero => numero % 2 !== 0);
    return numerosImpares;
}
let numerosPares = quitarPares(numeros2);
console.log(numerosPares);*/

function eliminarPares(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      array.splice(i, 1);
      i--; 
  }
  return array;
}
}
let numerosSinPares = eliminarPares(numeros2);
console.log(eliminarPares);


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

function saludar() {
    alert("Hello World!");
  };


// Cambiar el contenido de un elemento HTML mediante JavaScript.

/*let paragraph = document.getElementById("myParagraph");
paragraph.textContent = "Nuevo texto";
console.log(paragraph.textContent);*/



let p = document.getElementById("myParagrah")
p.innerText = "Esto cambia el parráfo"
console.log(p);

// Ocultar y mostrar elementos HTML utilizando JavaScript.


// Crear un array de 10 nombres.

let ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Málaga", "Alicante", "Granada", "Palma de Mallorca", "Zaragoza"];
console.log(ciudades);

// Crear una función que imprima en pantalla una lista con los nombres del array.

let ciudades2 = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Málaga", "Alicante", "Granada", "Palma de Mallorca", "Zaragoza"];

    
function imprimirCiudades() {
    let listaCiudades = document.getElementById("listaCiudades");
    let tituloCiudades = document.getElementById("tituloCiudades");
  
    for (let i = 0; i < ciudades2.length; i++) {
      let ciudad = document.createElement("li");
      ciudad.textContent = ciudades2[i]; 
    }
  }
  imprimirCiudades();
  console.log(ciudades2);

// Crear un array de números.

let edadSocios = [25, 32, 45, 37, 28, 50, 42, 29, 33, 39];
console.log(edadSocios);

// Crear una función que imprima en pantalla cuántos números tiene el array de números.

let edadSocios2 = [25, 32, 45, 37, 28, 50, 42, 29, 33, 39];
console.log(edadSocios2.length);

// Crea los nodos necesarios para imprimir un formulario.

let form = document.createElement("form");
let nameLabel = document.createElement("label");
let nameInput = document.createElement("input");
let emailLabel = document.createElement("label");
let emailInput = document.createElement("input");
let submitButton = document.createElement("button");

form.setAttribute("id", "myForm");
nameLabel.textContent = "Nombre";
emailLabel.textContent = "Email";
submitButton.textContent = "Enviar";

form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(submitButton);

document.body.appendChild(form);

console.log(form);
console.log(nameLabel);
console.log(emailLabel);
console.log(submitButton);

// Crea los nodos necesarios para crear una tabla.


let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");


let headerRow = document.createElement("tr");


let headerCell1 = document.createElement("th");
headerCell1.textContent = "Encabezado 1";

let headerCell2 = document.createElement("th");
headerCell2.textContent = "Encabezado 2";


headerRow.appendChild(headerCell1);
headerRow.appendChild(headerCell2);


thead.appendChild(headerRow);


let dataRow1 = document.createElement("tr");


let dataCell1 = document.createElement("td");
dataCell1.textContent = "Dato 1";

let dataCell2 = document.createElement("td");
dataCell2.textContent = "Dato 2";


dataRow1.appendChild(dataCell1);
dataRow1.appendChild(dataCell2);


tbody.appendChild(dataRow1);


table.appendChild(thead);
table.appendChild(tbody);


document.body.appendChild(table);

console.log(table);
console.log(thead);
console.log(tbody);




// Crea array de objetos 10 objetos con su respectivos key:value. Cada objeto deberá tener las siguientes

let mascotas = [
    {
      id: 1,
      name: "Lola",
      status: "vivo",
      species: "gato",
      type: "común",
      gender: "femenino",
    },
    {
      id: 2,
      name: "Harley",
      status: "vivo",
      species: "perro",
      type: "Border Collie",
      gender: "femenino",
    },
    {
      id: 3,
      name: "Trasgu",
      status: "muerto",
      species: "agaporni",
      type: "pájaro",
      gender: "masculino",
    },
    
    {
        id: 4,
        name: "Dexter",
        status: "vivo",
        species: "perro",
        type: "Border Collie",
        gender: "masculino",
      },
      {
        id: 5,
        name: "Tofu",
        status: "vivo",
        species: "perro",
        type: "Border Collie",
        gender: "masculino",
      },
      {
        id: 6,
        name: "Jamaica",
        status: "vivo",
        species: "perro",
        type: "Border Collie",
        gender: "femenino",
      },

      {
        id: 7,
        name: "Chester",
        status: "vivo",
        species: "perro",
        type: "Border Collie",
        gender: "masculino",
      },
      {
        id: 8,
        name: "Mini",
        status: "muerto",
        species: "gato",
        type: "común",
        gender: "femenino",
      },
      {
        id: 9,
        name: "Ron",
        status: "vivo",
        species: "perro",
        type: "Pastor Alemán",
        gender: "masculino",
      },
      {
        id: 10,
        name: "Darkness",
        status: "muerto",
        species: "gato",
        type: "Siamés",
        gender: "femenino",
      },
  ];

 console.log(mascotas);



 

  
//   Imprime cada elemento del objeto dentro de la tabla que creaste anteriormente.


/*
function generarTabla() {
    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    for (var i = 0; i < teachers.length; i++) {
      var teacher = teachers[i];
      
      var hilera = document.createElement("tr");
      
      var celdaId = document.createElement("td");
      var textoId = document.createTextNode(teacher.id);
      celdaId.appendChild(textoId);
      hilera.appendChild(celdaId);
  
      var celdaNombre = document.createElement("td");
      var textoNombre = document.createTextNode(teacher.name);
      celdaNombre.appendChild(textoNombre);
      hilera.appendChild(celdaNombre);
  
      var celdaEstado = document.createElement("td");
      var textoEstado = document.createTextNode(teacher.status);
      celdaEstado.appendChild(textoEstado);
      hilera.appendChild(celdaEstado);
  
      var celdaEspecie = document.createElement("td");
      var textoEspecie = document.createTextNode(teacher.species);
      celdaEspecie.appendChild(textoEspecie);
      hilera.appendChild(celdaEspecie);
  
      var celdaTipo = document.createElement("td");
      var textoTipo = document.createTextNode(teacher.type);
      celdaTipo.appendChild(textoTipo);
      hilera.appendChild(celdaTipo);
  
      var celdaGenero = document.createElement("td");
      var textoGenero = document.createTextNode(teacher.gender);
      celdaGenero.appendChild(textoGenero);
      hilera.appendChild(celdaGenero);
  
      tblBody.appendChild(hilera);
    }
  
    tabla.appendChild(tblBody);
    
    tabla.setAttribute("border", "1");
    
    body.appendChild(tabla); */

    
