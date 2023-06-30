//Ejercicio 1:
// Imprimir los numeros impares del 1 al 999.

console.log('');
console.log('Ejercicios practica clase 10');
console.log('');
console.log('Ejercicio 1:');
console.log('Imprimir los numeros impares del 1 al 999.');
console.log('OPCION 1');

let impares = [];
for (let i = 0; i <= 999; i++) {
    if (i % 2 !== 0) {
        impares = impares + i + ' ';
    }  
}
console.log(impares);

/////////////////////////////////////////////////

// console.log('');
// console.log('OPCION 2 (profesor)');

// for (let i = 0; i <= 999; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }  
// }

////////////////////////////////////////////////


console.log('');
console.log('Ejercicio 2');
console.log('Programar un bucle que sume todos los elementos de un arreglo de números');

let arreglo = [1, 2, 3, 4, 5];
let suma = 0;

for (let i = 0; i < arreglo.length; i++) {
    suma = suma + arreglo[i];
}
console.log(suma);
console.log('');

