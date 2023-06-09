// Crear un objeto coche haciendo la abstracción de sus atributos y un objeto anidado.

let carro = {
    marca: "Ford",
    modelo: ["Mondeo", 1998],
    color: "verde",
    puertas: 5,
}
//Crear una función que devuelva la marca del carro.
function visualizarMarca(vehiculo){
    let marca = vehiculo.marca;
    console.log(marca);
}
visualizarMarca(carro);

//Cantidad de puertas
//Vehiculo es el parámetro que le metemos, en este caso
//sería cualquier tipo de vehículo (avion, bici, cohce, moto)
//nosotro consultamos en concreto el objeto que ya definido de "carro";
//es una función que se puede reutilizar para cualquier pparámetro 

function consultarCantidadDePuertas(vehiculo){
    let numeroDePuertas = vehiculo.puertas;
    console.log(numeroDePuertas);
}
consultarCantidadDePuertas(carro);
