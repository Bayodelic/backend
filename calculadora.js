'use strict'

var args = process.argv.slice(2);

var num1 = parseFloat(args[0]);
var num2 = parseFloat(args[1]);

var plantilla = `
    La suma es: ${num1 + num2}
    La resta es: ${num1 - num2}
    La multiplicacion: ${num1 * num2}
    La division es: ${num1 / num2}
`

console.log(args);
console.log(plantilla);
console.log("Hola mundo desde node js");