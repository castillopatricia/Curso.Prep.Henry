//"x" e "y" son números enteros (int).
// Devuelve el número más grande
//Determinar si la persona según su edad puede ingresar a un evento.
//Si tiene 18 años ó más, devolver --> "Allowed"
//Si es menor, devolver --> "Not allowed"
var age = 20
if (age >= 18) {
    return ('allowed')
} else {
    return ('Not allowed')
}


//Recibimos un estado de conexión de un usuario representado por un valor numérico. 
//Cuando el estado es igual a 1, el usuario está "Online"
//Cuando el estado es igual a 2, el usuario está "Away"
//De lo contrario, presumimos que el usuario está "Offline"
//Devolver el estado de conexión de usuario en cada uno de los casos.

var user = 3
if (user === 1) {
    alert('Online')
} else if (user === 2) {
    alert('Away')
} else {
    alert('Offline')
}

// Devuelve un saludo en tres diferentes lenguajes:
// Si "idioma" es "aleman", devuelve "Guten Tag!
// Si "idioma" es "mandarin", devuelve "Ni Hao!"
// Si "idioma" es "ingles", devuelve "Hello!"
// Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
// Tu código:
if (idioma === 'aleman') {
    return 'Guten Tag!'
} else if
    (idioma === 'mandarin') {
    return 'Ni Hao!'
} else if (idioma === 'ingles') {
    return 'Hello!'
} else {
    return 'Hola!'
}

function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    // if(numero===10|| numero===5){
    //     return true
    // } else {
    //     return false
    // } 
    return numero === 10 || numero === 5
}

// Devuelve "true" si "numero" es menor que 50 y mayor que 20
// De lo contrario, devuelve "false"
// Tu código:
return numero < 50 && numero > 20

function esEntero(numero) {
    // Devuelve "true" si "numero" es un entero (int/integer)
    // Ejemplo: 0.8 -> false
    // Ejemplo: 1 -> true
    // Ejemplo: -10 -> true
    // De lo contrario, devuelve "false"
    // Pista: Puedes resolver esto usando `Math.floor`
    // Tu código:
    if (Math.floor(numero)) {
        return true
    } else {
        return false
    }
}
function operadoresLogicos(num1, num2, num3) {
    //La función recibe tres números distintos. 
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false.

}
function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.
    do {
        return numero + 5;
        numero++
    } while (numero < 8)
}
    

function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:

    
}
function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    var suma= 0 // es la variable que guarda el primer valor de la suma de los enteros.
    for (j=0;j< numeros.length;j++){// el bucle sirve para acceder a los elementos dentro del array numeros.
        
        suma= suma+ numeros[j]    // suma es igual al primer valor 0 + cada numero entero. 
    }
   return suma // es el resultado final con la suma de todos los enteros.
  }