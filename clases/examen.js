
/*

    const persona = {
      nombre: 'Sacha',
      apellido: 'Lifszyc',
      edad: 28
    }
const { nombre, apellido, edad } = persona

console.log(nombre)
console.log(apellido)
console.log(edad)


*/



$.get('https://swapi.co/api/people/1', function (luke) {
    console.log(luke.name)
})

$.get('https://swapi.co/api/people/4', function (vader) {
    console.log(vader.name)
})