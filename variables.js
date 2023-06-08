
let number1 = 44;
let name = "Harley"
let boolean1 = true;
let number2 = 5;

//solucion1
console.log(number1, name, boolean1, number2);
document.write(number1, name, boolean1, number2);

//solucion2
document.getElementById ("nombreGato").textContent = name

//solucion3

let variable1= document.createElement("p");
    variable1.innerText= `${name} ${number1}`
    document.querySelector("body").appendChild(variable1);

//Operaciones con integers

console.log(number1,number2);
let suma = number1 + number2;
console.log(suma);
document.write(suma);

//Concatenar

//declaramos 2 variables con valores tipo string

let buenos_dias = "Buenos días Amaia";
let pregunta = "¿Vives en una piña de bajo del mar?";

// camino largo para imprimir en navegador. En la linea 17 y 18 está el camino corto. 


//traer el nodo padre dónd quiero crear/insertar el nodo hijo/tag 
let main_tag = document.getElementById("principal") //EL PADRE:  nos traemos el NOD, dónde queremos alamacenar el valor 

//Crear el nodo hijo que insertará el nodo padre (main)
let saludo_texto = document.createElement("p"); // EL HIJO: Creamos un hijo NODO, creamos un p (párrafo)

//Asignar el valor/texto al nodo hijo.
saludo_texto.innerHTML = `${buenos_dias} ${pregunta}`;// Añadir el valor AL HIJO CON innterHTML y me interpola con template string (``))

//Añadir ese nodo hijo (p) al nodo padre (main) (presentamos el hijo al padre)
main_tag.appendChild(saludo_texto); // Añadir el AppendCHILD, del hijo en el padre. Para eso llamamos al padres y cargamos al hijo. 

