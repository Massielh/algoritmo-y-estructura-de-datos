// MARCAS: contar cuantas marcas hay ( no usar length) y ordenar e la a - z
import { marcas } from "./data/data";
type Marca = {
    marca: string;
    modelo: string;
    combustible: string;
};
// Funcion para contar marcas sin usar length
const contadorMarcas = (array: Marca[]): number => {
    let contador= 0;
    for (const item of array) {
        contador++;
    };
    return contador;
};

// Funcion para ordenar marcas en orden alfabético (a - z)
const marcasOrdenadas = (array: Marca[]): Marca[] => {
    return array.sort((a, b) => a.marca.localeCompare(b.marca) );
};

console.log("Ejercicio Marcas")

const totalMarcas = contadorMarcas(marcas);
const marcasOrdenadasLista = marcasOrdenadas(marcas);
console.log(`Hay ${totalMarcas} marcas.`)
console.log(`Marcas ordendas: `);
marcasOrdenadasLista.forEach(item => console.log(item.marca));
console.log();


// INVENTARIO: Cual es el producto con mayor existencia y cantidad existencial
import { inventory } from "./data/data";
let mayorExistencia= inventory[0];

for (var i =1 ; i < inventory.length; i++) {
    const inventario = inventory [i];
    if (inventario.quantity > mayorExistencia.quantity) {
        mayorExistencia = inventario;
    }
};

console.log("Ejercicio Inventario")
console.log(`El producto con mayor existencia es ${mayorExistencia.name}`);
console.log(`La cantidad del producto con mayor existencia es ${mayorExistencia.quantity}`);
console.log();


// Heroes: Cuantos heroes hay por cada cuidad y cual es la cuidad que tiene mas heroes

import { heroes } from "./data/data";

function contarHeroes(arr: { name: string; city: string; power: string; type: string }[]): { city: string; count: number }[] {
    const contarCiudad: Record<string, number> = {};

    for (let i = 0; i < arr.length; i++) {
        const city = arr[i].city;

        if (!contarCiudad[city]) {
            contarCiudad[city] = 0;
        }
        contarCiudad[city]++;
    }

    const result: { city: string; count: number }[] = [];
    for (const city in contarCiudad) {
        result.push({ city, count: contarCiudad[city] });
    }

    return result;
};

const heroesPoCiudad = contarHeroes(heroes);
console.log("Ejercicio Heroes")
heroesPoCiudad.forEach(entry => {
    console.log(`Ciudad: ${entry.city}, Cantidad de héroes: ${entry.count}`);
});
const ciudadConMasHeroes = heroesPoCiudad.reduce((prev, current) => {
    return (prev.count > current.count) ? prev : current;
});
console.log(`\nLa ciudad con más héroes es: ${ciudadConMasHeroes.city} con ${ciudadConMasHeroes.count} héroes.`);
console.log();



// personas. sumar todas las edades y calcular el promedio de las edades

import { people } from "./data/data";

type Persona = {
    id: number;
    name: string;
    edad: number;
    sexo: string;
};

const sumarEdades = (array: Persona[]): number => {
    let suma = 0;
    for (const item of array) {
        suma += item.edad;
    }
    return suma;
};

const calcularPromedio = (array: Persona[]): number => {
    const sumaEdades = sumarEdades(array);
    return  array.length > 0 ? sumaEdades / array.length : 0; 
};

console.log("Ejercicio Personas")

const totalEdades = sumarEdades(people);
const promedioEdades = calcularPromedio(people);

console.log(`la suma de edades es ${totalEdades}\n el promedio de edades es ${promedioEdades.toFixed(2)}`);
//const sumaEdad = people.filter((person) => person +  ).length;
//const promedioEdad = people.filter((person) => person.edad % ).length;
//console.log(`la suma de edades es${sumaEdad}}\n los mayores son ${promedioEdad}`);