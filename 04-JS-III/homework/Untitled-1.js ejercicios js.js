// Escribe el código que muestre números primos en el intervalo de 2 a n. y n =10//
// no debe estar programado para valores fijos//

var num = prompt('Ingresa un numero')
for (var k = 2; k < num; k++) {
    for (var n = 2; n <= k; n++) {

        if (k % n === 0 && k !== 2) {
            break
        }
        if (n === k - 1 || k === 2) {
            alert(k)
        }
    }

}
function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero

    if (numero % 3 === 0) {
        return 'fizz'
    } else if (numero % 5 === 0) {
        return 'buzz'
    } else if (numero % 3 === 0 && numero % 5 === 0) {
        return 'fizzbuzz'
    } else {
        return numero
    }
}

function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos

    for (var n = 2; n <= numero; n++) {

        if (numero % n === 0 && numero !== 2) {
            return false
        }
        if (n === numero - 1 || numero === 2) {
            return true
        }
    }
}

function esVerdadero(valor) {
    //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
    //si su valor es true y “Soy falso” si su valor es false.
    //Escribe tu código aquí
    if (valor) {
        return 'Soy verdadero'
    } else {
        return 'Soy falso'
    }


}
function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
}
objetos//

var libroAngular = {
    titulo: 'Desarrollo web agil con angular JS',

}

// DEFINE UNA FUNCION QUE RECIBA UN COLOR Y DEVUELVA SI ES UN COLOR PRIMARIO O NO.
function esUnColorPrimario(color) {
    return color === 'rojo' || color === 'azul' || color === 'amarillo'

}
   // OBJETOS// METODOS!!!!
var colores = { // var colores es el objeto le asigno los valores que estan adentro.
    esUnColorPrimario: function(color) { // la estructura es clave-valor. va en la izquierda mi propiedad y adentro el valor. esuncolorprimario es la fx
        return color === 'rojo' || color === 'azul' || color === 'amarillo' // se declara la fx y se coloca el parametro color que es una variable tb
    }// el retorno de la funcion es verdadero o falso aqui si el valor que entra es primario true,
}
colores.esUnColorPrimario('azul')// esto es para probarla a la fx en la consola del navegador, en los parentesis cuando llamo a la funcion pongo un parametro



const libroAngular = {
    titulo: 'Desarrollo web ágil con AngularJS',
    autor: 'Carlos Azaustre',
    paginas: 64,
    formatos: ["PDF", "ePub", "Mobi"],
    precio: 2.79,
    publicado: false
};

// escribir una funcion que reciba el nombre de una propiedad del objeto libroAngular y la retorne el valor de la propiedad del objeto.
function propiedadDelObjeto(propiedad) {
    return  libroAngular[propiedad] 
}

propiedadDelObjeto('precio')