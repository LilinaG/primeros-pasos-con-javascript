function saludar_en_la_mañana(nombre) {
    let saludo = "Buenos días " + nombre;
    console.log(saludo);
}
saludar_en_la_mañana("Julia");

//otra forma

function saludar(nombre){
    return "Hola " + nombre + ", bienvendia";
}
console.log(saludar("Marta"));


//otra forma de hacerlo con Template String 

function saludarDiferente(nombre){
let saludo = `Buenos días ${nombre}`;
console.log(saludo);
}
saludarDiferente("Ramon");

//Refactorizar con template string 

function saludar2(nombre){
    return `Hola ${nombre} bienvenida`;
}
console.log(saludar2("María"));

//Crear función que reciba como parámetros 2 números y que devuelva la suma de ellos 
function sumar(a, b){
    console.log(a+b);
    return(a+b);
}
sumar(23, 50);


//Otra función en base a la anterior, llamar a la función anterior

function operar_numeros(c, d){
    let resultado = sumar(c, d)
    console.log(resultado);
    return resultado; // return es como contar un secreto que no retorna nada sino que antes debe de t    
}
operar_numeros(5, 7);

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
determinarParoImpar(6);
console.log(determinarParoImpar(11));

// La función anterior refactorizada

function determinarParoImpar(numero){
if (numero % 2 == 0) {
    let respuesta_par = `El ${numero} es par`;
}
return 
}