// 1. Crear una variable con un valor numérico. Con un if hacer que  si su valor es mayor a
// 15 se imprima “Es mayor a quince”, si es menor o igual a 15 se imprime “Es menor o 
// igual que quince”. Fijarse que cuando el valor de la variable es exactamente 15 debe 
// imprimir la segunda respuesta. Probar con distintos valores de la variable que el if
// funcione.

console.log('Ejercicio 1:');

let num1 = 22;
    if (num1>15) {
        console.log('Es mayor a quince');
    } else {console.log('Es menor o igual que quince');
}

console.log(' ');


//Ejercicio 2:
//Usando un loop imprimir 10 veces la palabra “hola”, separada por espacios.

console.log('Ejercicio 2:');

for (let i = 0; i < 10; i++) {
    process.stdout.write('hola ');
}
console.log(' ');

console.log(' ');


// 3. Crear un arreglo con 5 números cualquiera. 
// Hacer con un loop que todos los elementos del arreglo pasen a ser 0.

console.log('Ejercicio 3:');

let myArray = [4, 8, 45, 123, 44];
myArray=myArray.map(e => e-e);
console.log(myArray);

console.log(' ');


// 4. Crear un arreglo con 10 números cualquiera.
// Con un loop hacer que los números en posiciones pares pasen a ser 0 pero los de posiciones impares queden igual.

console.log('Ejercicio 4:');

let myArray10 = [4, 8, 45, 123, 44, 654, 45, 36, 789, 12];

for (let i=0; i < myArray10.length; i++) {
     if (myArray10[i]%2 === 0 ) {
         myArray10[i]=0
             } else {myArray10[i]=myArray10[i];}
 }
console.log(myArray10);

console.log(' ');
 

//  5. Crear un arreglo llamado "nombres" que va a ser una lista de nombres
// de personas invitadas a una fiesta y agregar los siguientes nombres:
//  Carla - Pedro - Daiana - Ivan - Ivette - Mario - Vanesa

console.log('Ejercicios 5');

let nombres;
nombres = ['Carla', 'Pedro', 'Daiana', 'Ivan', 'Ivette', 'Mario', 'Vanesa'];

console.log("Arreglo: nombres = ['Carla', 'Pedro', 'Daiana', 'Ivan', 'Ivette', 'Mario', 'Vanesa'];");
console.log('');


//  6. Imprimir solo los nombres que terminen con la letra "a"

console.log('Ejercicios 6');

let nombresConA = nombres.filter(e => e.endsWith('a'));

for (let a=0; a<nombresConA.length; a++) {
    console.log(nombresConA[a]);
}





console.log('');





//  7. Crear un arreglo llamado "apellidos" que va a contener los apellidos de las
//  personas de la lista anterior, asignarle los siguientes valores
//  Gomez - Gonzales - Hernandez - Suarez - Gimenez - Gomez - Mendez


console.log('Ejercicios 7');

let apellidos = ['Gomez', 'Gonzales', 'Hernandez', 'Suarez', 'Gimenez', 'Gomez', 'Mendez'];

console.log("arreglo: apellidos = ['Gomez', 'Gonzales', 'Hernandez', 'Suarez', 'Gimenez', 'Gomez', 'Mendez']");
console.log('');


//  8. Imprimir todos las personas (nombre y apellido) cuyo nombre termine en "a"
//  y cuyo apellido empiece con "G"

console.log('Ejercicio 8');

for (let r=0; r<nombres.length; r++) {
    if (nombres[r].endsWith('a') && apellidos[r].startsWith('G')) {
        console.log(nombres[r] + ' ' + apellidos[r]);
    }
}

console.log(' ');


//8.b. Crear un arreglo (array) con los nombres completos de todas las personas (nombre y apellido) e imprimirlo.

console.log('Ejercicio 8.b.');

let nombresCompletos = [];
for (let m=0; m<nombres.length; m++) {
    nombresCompletos.push(nombres[m]+' '+apellidos[m]);
}
console.log(nombresCompletos);

console.log(' ');


//8.c. Imprimir los nombres completos de todas las personas (nombre y apellido) en una sola linea 
//y separadas por comas.

console.log('Ejercicio 8.c.');

let nombresEnLinea = nombresCompletos.toString();
nombresEnLinea = nombresEnLinea.replaceAll(',', ', ');
console.log(nombresEnLinea + ' ');


console.log(' ');


//  9. Crear un arreglo llamado "estadoInvitacion" que almacenara en formato
//  booleano (true o false) el estado de la invitacion de cada persona
//  invitada y asignarle los siguientes valroes:
//  true - false - true - true - true - false - true

console.log('Ejercicio 9');

let estadoInvitacion = [true, false, true, true, true, false, true];

console.log("arreglo: estadoInvitacion = [true, false, true, true, true, false, true];");
console.log(' ');


//  10. Imprimir todas las personas invitadas (inicial del nombre y apellido) que
//  tienen la invitacion validada

console.log('Ejercicio 10');

let invitacionValidada = [];
for (let n=0; n<estadoInvitacion.length; n++) {
    if (estadoInvitacion[n]===true) {
        invitacionValidada = invitacionValidada + nombres[n].charAt(0) + apellidos[n].charAt(0) + ', ';
    }   
}
console.log(invitacionValidada);

console.log(' ');


// 11. Imprimir todas las personas (inicial del nombre, apellido y estado de la
// invitacion) que cumplan con las condiciones del ejercicio 8, 10.




    
// (Todos los ejercicios que imprimen datos de las personas lo tiene que hacer
// en una linea por persona)
   
// Extras: (Arrays y bucles anidados)
// crear un array que contenga los tres arrays declarados y asignados
// anteriormente

// 1. ¿Cuantas posiciones tiene el nuevo array?
// 2. Repetir los ejercicios anteriores para este nuevo formato de arreglo
