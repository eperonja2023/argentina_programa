//Prueba antes de los jercicios

let cadena = 'Holacomova';
cadena = cadena.split('');
console.log(' ');
console.log('Prueba');
console.log(cadena);




//Ejercicio 1
//Dada una variable cadena de tipo String queremos saber si sólo tiene dígitos.
//Esto es molesto.
//Primero podemos ver si un carácter c es un dígito con 
//> !isNaN(Number(c)) 
//entonces podemos transformar el String en un arreglo de caracteres
//> var caracteres = Array(cadena)
//luego mapeamos eso para todos los caracteres del arreglo
//> var sonDigitos = caracteres.map(e => !isNaN(Number(e)))
//eso nos da un arreglo de Booleanos y podemos reducirlo
//> var esNumero = sonDigitos.reduce((e,a) => e && a,true)

console.log(' ');
console.log('Ejercicio 1');
console.log(' ');


//Ejercicio 2
// Dada una variable cadena de tipo String queremos saber si sólo tiene letras.
// La misma idea que antes pero ahora para chequear si c es una letra usamos:
// > RegExp(/^\p{L}/,'u').test(c)
// Eso funciona con letras con tilde y con la ñ.

let cadena2 = 'hola';
let cadena2Array = cadena2.split('');
console.log('Ejercicio 2');
console.log(cadena2Array);
console.log(' ');


//Ejercicio 3
//Dada una variable cadena de tipo String queremos otra cadena que sólo tenga su inicial en minúscula

let cadena3 = 'HHHola'
let cadena3Minuscula = cadena3.toLowerCase();
console.log('Ejercicio 3');
console.log(cadena3Minuscula);
console.log(' ');
// ==> solo me tira una h en minuscula


//Ejercicio 4
// Dada una variable cadena de tipo String queremos separar las palabras; es decir generar una lista de palabras. Ejemplos:
// > cadena = “Hola Pepe, soy Juan”
// queremos
// > resultado = [“Hola”, “Pepe,”, “soy” “Juan”]
// > cadena = “Miguel Pagano 43021032”
// queremos
// > resultado = [“Miguel”, ”Pagano”, “43021032

console.log('Ejercicio 4');
let saludoDeJuan = 'Hola Pepe, soy Juan';
let cadenaSaludoJuan = saludoDeJuan.split(' ');
console.log(cadenaSaludoJuan);
let miguel = 'Miguel Pagano 43021032';
let cadenaMiguel = miguel.split(' ');
console.log(cadenaMiguel);
console.log(' ');


//Ejercicio 5
//Dada una cadena queremos ver que tenga la forma “Nombre Apellido DNI” donde DNI es una cadena
// sólo de dígitos.

// *** debemos usar &&
// *** testnum && testpalab


console.log('Ejercicio 5');
let cadena5 = 'Nombre Apellido 23456789';
let arrayCadena5 = cadena5.split(' ');
let pruebaDoc = arrayCadena5.map(e => isNaN(e));
console.log(pruebaDoc);


// 6- Si tenemos una cadena que satisface la condición del punto 5,
// queremos devolver la cadena que tiene la inicial del nombre, la inicial del apellido y
// los tres últimos dígitos del DNI.

console.log(' ');
console.log('Ejercicio 6');
console.log(' ');