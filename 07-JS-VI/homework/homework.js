// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}
// el charAt lo que hace es seleccionar algunos caracteres de la cadena. ( el indice)
// el toUpperCase convierte esa cadena a mayuscula 
function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb() // una funcion se invoca con parentesis
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  var producto = n1 * n2 // uso los parametros y los guardo en una variable juntos.
  // luego returno la callback con esos dos numeros.
  return cb(producto)

}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var suma = numeros.reduce(function (acumulador, elemento) {// uso el reduce para sumar todos los numeros de un array, al resultado de esa suma le paso a callback
    return acumulador + elemento
  }, 0)
  cb(suma)
}
function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(cb)

}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var arreglo = array.map(function (elemento) { // map  me devuelve un nuevo array.
    // luego retorno el valor de cb y retorno un array!!! 
    return cb(elemento)
  })

  // var arreglo = array.map(cb)
  return arreglo
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  return array.filter(function (elemento) { // uso el filter para filtrar los elementos
    // tengo que buscar la primera letra y compararla con 'a'
    elemento.charAt(0)// y despues retornar UN ARRAY
    return elemento.charAt(0) === 'a'
  })

}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
