// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var matriz = []// creo una matriz contiene adentro otros arrays
  for (var propiedad in objeto) {
    var arr = [propiedad, objeto[propiedad]]
    matriz.push(arr)// hago el push en la matriz porque tengo un solo array, y el push es agregar array que tenga el par clave valor.
    // accedo al valor de la propiedad  del objeto.
  }
  return matriz
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí


  let objeto = {}// objeto vacio donde se guardan propiedades(letras)con su valor
  let cadena = Array.from(string)// metodo para pasar de string a array.
  for (i = 0; i < cadena.length; i++) {
    let letra = cadena[i]            // creo una variable para guardar el elemento del array.
    let contador = objeto[letra] || 0   //otra variable donde guardo el valor de la letra(numero) y el valor por defecto
    objeto[letra] = contador + 1        // luego asigno a la propiedad letra el valor contador+1
  }
  return objeto
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayuscula = '';
  var minuscula = '';
  for (i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {//creo dos variables con strings vacio para ir viendo cuales son mayusculas y minusculas.
    // itero sobre la cadena y si mi elemento es igual al elemento en mayuscula. lo guardo en mayuscula.
    // si mi elemento no es mayuscula// lo guardo en minuscula- y retorno las mayusculas + minusculas.
      mayuscula = mayuscula + s[i];
    }
    else {
      minuscula = minuscula + s[i];
    }
  }
  return (mayuscula + minuscula)
}



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  // var cadena = ''
  var cadenas = []
  let frase = str.split(" ")
  for (i = 0; i < frase.length; i++) {
    let elemento = frase[i]// guardo en una variable el elemento del array
    let resultado = Array.from(elemento)// convierto un array a string
    let inverted = resultado.reverse();// invierto el array con el reverse
    let palabraInvertida = inverted.join('')// y luego junto todos los elementos del array 
    cadenas.push(palabraInvertida)

    // if (i === 0) {
    //   cadena = cadena.concat('', palabraInvertida);
    // } else {
    //   cadena = cadena.concat(' ', palabraInvertida)
    // }
  }
  // return cadena
  return cadenas.join(' ')
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numCapicua = numero.toString().split('').reverse().join('')
  if (numCapicua === numero.toString()) {
    return 'Es capicua'
  } else {
    return 'No es capicua'
  }
}



function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var letras = cadena.split('')
  var newString = ''
  for (i = 0; i < cadena.length; i++) {
    var letra = cadena[i]
    if (letra !== 'a' && letra !== 'b' && letra !== 'c') {
      //en las distintas repeticiones del bucle, si tengo que guardar un valor en una  misma variable
      //esta tiene que estar creada afuera del bucle, porque si esta adentro, se crea y se destruye.
      //por ej un mismo objeto, un mismo array o un mismo string.

      newString = newString + letra

    }
  }
  return newString
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  function comparar(palabraA, palabraB) {
    return palabraA.length - palabraB.length
  }
  return arr.sort(comparar);

  // let newArr = [...arr]
  // let desordenado
  // do {
  //   desordenado = false
  //   for (i = 0; i < newArr.length - 1; i++) {
  //     var palabra = newArr[i]
  //     var palabraB = newArr[i + 1]
  //     if (palabra.length > palabraB.length) {
  //       newArr[i] = palabraB
  //       newArr[i + 1] = palabra
  //       desordenado = true
  //     }
  //   }
  // } while(desordenado)

  // return newArr
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var array = []

  for (i = 0; i < arreglo1.length; i++) {
    for (j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {

        var numero = arreglo1[i]
        array.push(numero)

      }
    }
  }
  return array
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

