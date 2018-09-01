
class Persona {

    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        var { nombre , apellido } = this
        console.log(`Hola me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido)
        }
    }

    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        var { nombre, apellido } = this
        
        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}


function responderSaludo(nombre, apeelido, esDev) {
    console.log(`Buen dia ${nombre} ${apeelido}`);

    if (esDev) {
        console.log(`No sabia que eras desarrollador`);
    }
}

var jose = new Persona('jose', 'rojas', 1.79)
var gustavo = new Persona('gustavo', 'rojas', 1.80)
var juan = new Desarrollador('juan' , 'rojas', 1.80)

jose.saludar()
gustavo.saludar(responderSaludo)
juan.saludar(responderSaludo)
