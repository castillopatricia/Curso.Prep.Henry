// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:

  class Usuario {  // creo mi clase usuario
    constructor(opciones) { // opciones es el objeto que acepta el constructor. 
      this.usuario = opciones.usuario // los valores son los parametros con opciones adelante. porque this se refiere a la clase.
      this.nombre = opciones.nombre
      this.email = opciones.email
      this.password = opciones.password
    }
    saludar() {
      return 'Hola, mi nombre es ' + this.nombre // el metodo es  la funcion y me retona el string con el nombre 
    }

  }
  return Usuario
}






function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function () { // mi OBJETO ENTONCES ES PROTOTYPE. Y LE AGREGO AL CONSTRUCTOR DE ESE OBJETO, MI METODO QUE ES SALUDAR, ES UNA FUNCION, PARA ASIGNARLE VALOR O SOBRE ESCRIBIR LE PONGO EL =
    return 'Hello World!'
  }
}



function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function () {
    return this.split("").reverse().join("");
  }
}

// ---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//Ej: { 
//   Nombre: 'Juan',
//   Apellido: 'Perez',
//   Edad: 22,
//   Domicilio: 'Saavedra 123'
//  }



class Persona {
  constructor(nombre, apellido, edad, domicilio) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.domicilio = domicilio
  }

  detalle() {
    var objeto = {
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      domicilio: this.domicilio

    }
    return objeto
  }
}



function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  var persona = new Persona(nombre, apellido, edad, dir) // aqui creo una nueva instancia con la palabra new y la clase.
  return persona
}
// guardo los valores en una variable para pedir el retorno de esa variable persona. ojo que tb es el nombre de la clase.



function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"

  Persona.prototype.datos = function () {// se agrega al prototipo clase un metodo 
    return this.nombre + ', ' + this.edad + ' años' // se concatena strings  se puede hacer de ambas formas.

    // return `${this.nombre}, ${this.edad} años`
  }
}





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo,
  Persona
};
