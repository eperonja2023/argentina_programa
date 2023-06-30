console.log('');
console.log('***Ejercicios practica 27/06/23***');
console.log('EJERCICIO 1');
console.log('');
console.log('Programar una funcion que tome un numero y que devuelva');
console.log('"Es par" si el número es par, y "Es impar" si el número es impar');

console.log('');
console.log('VARIANTE A');
function parImpar(nro) {
    if (nro % 2 !== 0) {
        console.log('Es impar');
    } else {
        console.log('Es par');
    }
}

parImpar(1);
parImpar(2);


console.log('');
console.log('VARIANTE B');
function parImpar2(nro) {
    if (nro % 2 !== 0) {
        console.log('Es impar');
        return (nro);
    } else {
        console.log('Es par');
        return (nro);
    }
}

console.log(parImpar2(1));
console.log(parImpar2(2));




console.log ('');
console.log ('EJERCICIO 2');
console.log ('Programar una funcion que tome una frase y devuelva la cantidad de palabras que tiene la frase');

let enunciado = 'Programar una funcion que tome una frase y devuelva la cantidad de palabras que tiene la frase';

function cantPalabras (frase) {
    frase = frase.split(' ');
    cantPalabras = frase.length; // estas 2 lineas son el equivalente a hacer en una sola línea lo siguiente:
    return(cantPalabras);        // ==>  return (frase.length);
}

console.log(cantPalabras (enunciado));

