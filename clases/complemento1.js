
var sacha = {
    nombre:'Sacha',
    apellido: 'Lifszyc',
    edad:28
}

/**
 * 
 * lET reduce su alcance solo al bloque en el que esta
 * VAR lo escala
 * CONST no puede cambiar el valor de la variable
 *  
 */
function esMayorDeEdad(persona) {
    var mensaje
    if (persona.edad > 18) {
         mensaje = 'Es mayor de edad'
    }
    else{
         mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
}


esMayorDeEdad(sacha)