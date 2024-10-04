"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MARCAS: contar cuantas marcas hay ( no usar length) y ordenar e la a - z
const data_1 = require("./data/data");
// Funcion para contar marcas sin usar length
const contadorMarcas = (array) => {
    let contador = 0;
    for (const item of array) {
        contador++;
    }
    ;
    return contador;
};
// Funcion para ordenar marcas en orden alfabético (a - z)
const marcasOrdenadas = (array) => {
    return array.sort((a, b) => a.marca.localeCompare(b.marca));
};
console.log("Ejercicio Marcas");
const totalMarcas = contadorMarcas(data_1.marcas);
const marcasOrdenadasLista = marcasOrdenadas(data_1.marcas);
console.log(`Hay ${totalMarcas} marcas.`);
console.log(`Marcas ordendas: `);
marcasOrdenadasLista.forEach(item => console.log(item.marca));
console.log();
// INVENTARIO: Cual es el producto con mayor existencia y cantidad existencial
const data_2 = require("./data/data");
let mayorExistencia = data_2.inventory[0];
for (var i = 1; i < data_2.inventory.length; i++) {
    const inventario = data_2.inventory[i];
    if (inventario.quantity > mayorExistencia.quantity) {
        mayorExistencia = inventario;
    }
}
;
console.log("Ejercicio Inventario");
console.log(`El producto con mayor existencia es ${mayorExistencia.name}`);
console.log(`La cantidad del producto con mayor existencia es ${mayorExistencia.quantity}`);
console.log();
// Heroes: Cuantos heroes hay por cada cuidad y cual es la cuidad que tiene mas heroes
const data_3 = require("./data/data");
function contarHeroes(arr) {
    const contarCiudad = {};
    for (let i = 0; i < arr.length; i++) {
        const city = arr[i].city;
        if (!contarCiudad[city]) {
            contarCiudad[city] = 0;
        }
        contarCiudad[city]++;
    }
    const result = [];
    for (const city in contarCiudad) {
        result.push({ city, count: contarCiudad[city] });
    }
    return result;
}
;
const heroesPoCiudad = contarHeroes(data_3.heroes);
console.log("Ejercicio Heroes");
heroesPoCiudad.forEach(entry => {
    console.log(`Ciudad: ${entry.city}, Cantidad de héroes: ${entry.count}`);
});
const ciudadConMasHeroes = heroesPoCiudad.reduce((prev, current) => {
    return (prev.count > current.count) ? prev : current;
});
console.log(`\nLa ciudad con más héroes es: ${ciudadConMasHeroes.city} con ${ciudadConMasHeroes.count} héroes.`);
console.log();
// personas. sumar todas las edades y calcular el promedio de las edades
const data_4 = require("./data/data");
const sumarEdades = (array) => {
    let suma = 0;
    for (const item of array) {
        suma += item.edad;
    }
    return suma;
};
const calcularPromedio = (array) => {
    const sumaEdades = sumarEdades(array);
    return array.length > 0 ? sumaEdades / array.length : 0;
};
console.log("Ejercicio Personas");
const totalEdades = sumarEdades(data_4.people);
const promedioEdades = calcularPromedio(data_4.people);
console.log(`la suma de edades es ${totalEdades}\n el promedio de edades es ${promedioEdades.toFixed(2)}`);
//const sumaEdad = people.filter((person) => person +  ).length;
//const promedioEdad = people.filter((person) => person.edad % ).length;
//console.log(`la suma de edades es${sumaEdad}}\n los mayores son ${promedioEdad}`);
