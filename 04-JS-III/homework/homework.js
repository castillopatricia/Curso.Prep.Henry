// No cambies los nombres de las funciones.


function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  return array[0]  // el indice comienza en 0 por eso se coloca entre corchetes.
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];  // se resta 1 a la cantidad de elementos del array para saber cual es el ultimo
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length; // me permite conocer el total de elementos dentro del array
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código: 

  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] + 1 // accedo con el bucle a los elementos del array y los incremento en 1
  }                         // con la modificacion y reasignacion en el lugar
  return array

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)  // con  el push añado un elemento al final de la cadena
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)  // el unshift sirve para aumentar un elemento en el inicio de la cadena.
  return array


}
function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frases = palabras[0] // creo una variable donde guardare todos los strings este es el primero

  for (i = 1; i < palabras.length; i++) { // accedo a todos los elementos dentro del array
    frases += ' ' + palabras[i] // coloco aqui espacio porque las palabras deben ser separadas por espacios y +para concatenar los elementos del array
  }                             //
  return frases
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  for (var i = 0; i < array.length; i++) { // bucle para acceder a todos los elementos del array

    if (elemento === array[i]) { // mi condicion adentro del bucle quiero saber si elemento es un elemento del bucle
      return true
    }
  }
  return false
}



function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0 // variable con el primer valor de la suma
  for (var j = 0; j < numeros.length; j++) { // el bucle para acceder a los  numeros enteros dentro del array
    suma = suma + numeros[j]// la suma de los numeros del interior del array y el primer valor que es 0
  }
  return suma
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código: 
  var suma = 0       // es la variable que guarda el primer valor de la suma que hare despues
  for (var p = 0; p < resultadosTest.length; p++) { // el bucle para acceder a cada elemento que hay adentro
    suma = suma + resultadosTest[p] // la suma de todos los numeros que hay adentro del bucle, comienza son 0
  }
  var promedio = suma / resultadosTest.length  // La variable  promedio es la que  me guarda adentro la operacion para sacar el promedio
  return promedio    // el retorno acordarse que va afuera del bucle.
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var esMayor = 0 // creo una variable para guardar los valores de numero
  for (i = 0; i < numeros.length; i++) { // bucle para recorrer los numeros del array
    if (numeros[i] > esMayor) {   // la condicion para saber si el numero i es mayor y despues guardo ese valor en la variable
      esMayor = numeros[i]
    }
  }
  return esMayor   // retorno la variable es mayor que tiene guardado el valor mas grande-
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 0) {
    return 0              // aqui la condicion va primero  porque si la condicion se cumple, lo demas no se ejecuta porque tiene un retorno
  }
  var producto = 1 // el neutro de la multiplicacion  es 1 

  for (var k = 0; k < arguments.length; k++) { // el bucle para acceder a los argumentos del array
    producto = producto * arguments[k] // el producto de los argumentos  pasados por agumentos
  }
  return producto // el retorno del producto de los argumentos
}


function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  var contador = 0
  for (i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) { // RECORDAR QUE  EL IF NO SIEMPRE DEBE TENER UN RETORNO PERO SI TIENE QUE TENER UN BLOQUE DE CODIGO.
      contador += 1  // es cuando yo cuento los elementos que cumplen con esa condicion
    }
  }
  return contador
}



function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return 'Es fin de semana'
  } else {
    return 'Es dia Laboral'
  }
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var resultado = n  // creo una variable con un numero entero  dividido en 10
  while (resultado >= 10) { // en el bucle, mi condicion es resultado mayor a 10 porque empiezo desde el numero mas grande
    // tengo que guardar en el bucle lo que quiero que se repita o sea que el resultado de cada division se vuelva  a dividir en 10

    resultado = Math.floor(resultado / 10) // redondeo los resultados de las divisiones para que queden en enteros

  }
  return resultado === 9 // y lo comparo con 9 porque mi condicion es verdadera si el entero empieza en 9
}




function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  for (var i = 0; i < arreglo.length - 1; i++) {// el bucle para acceder a los elementos dentro del array menos el ultimo elemento
    // si a la condicion del bucle o a la variable las modifico, me saltea elementos del array
    if (arreglo[i] !== arreglo[i + 1]) { // mi condicion para comparar un elemento que sea distinto al que sigue
      return false
    }
  }
  return true
}




function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses = []
  for (var i = 0; i < array.length; i++) {

    if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
      meses.push(array[i])
    }
  }

  if (meses.length === 3) {
    return meses
  } else {
    return 'No se encontraron los meses pedidos'
  }

}



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var enteros = [] // array nuevo donde guardare mis valores
  for (var j = 0; j < array.length; j++) { // recorro el array
    if (array[j] > 100) {                             // se accede a los elementos de un array, con los corchetes.  // ej: array[1]
      enteros.push(array[j])              // agrego al array vacio enteros los elementos mayores a 100
    }
  }
  return enteros // retorno el nuevo array
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var suma = numero
  var array = []  // creo un array vacio donde guardare los nuevos valores
  for (var i = 0; i < 10; i++) { // el bucle donde mi condicion de repeticion es 10
    suma = suma + 2 // la variable donde aumento en dos el numero que entra
    array.push(suma)

    if (suma === i){  // la condicion donde comparo suma con la iteracion y retorno el mensaje
      return 'Se interrumpió la ejecución'                      // el break para cortar la ejecucion del codigo.   
    }
  }

  return array
}




function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [] // el array vacio para guardar los valores.
  var suma = numero // una nueva variable para guardar los valores aumentados en 2
  for (var i = 0; i < 10; i++) {// el bucle para acceder a los numeros que estan adentro del bucle.
    if (i == 5) continue
    suma = suma + 2   
      
    array.push(suma)
    

  
}
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
