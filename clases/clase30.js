
const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = 'people/:id'
const options = { crossDomain: true }




function obtenerPersonaje(id) {

    return new Promise( (resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, options, function(data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })
    
}

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`);
    
}


obtenerPersonaje(1)
    .then( personaje => {
        console.log(`Hola yo soy ${personaje.name}, el personaje 1`)
        
        return obtenerPersonaje(2)
    })
    .then( personaje => {
        console.log(`Hola yo soy ${personaje.name}, el personaje 2`)

        return obtenerPersonaje(3)
    })
    .then(personaje => {
        console.log(`Hola yo soy ${personaje.name}, el personaje 3`)

        return obtenerPersonaje(4)
    })
    .then(personaje => {
        console.log(`Hola yo soy ${personaje.name}, el personaje 4`)

        return obtenerPersonaje(5)
    })
    .then(personaje => {
        console.log(`Hola yo soy ${personaje.name}, el personaje 5`)

        return obtenerPersonaje(6)
    })
    .then(personaje => {
        console.log(`Hola yo soy ${personaje.name}, el personaje 6`)

        return obtenerPersonaje(7)
    })
    .then(personaje => {
        console.log(`Hola yo soy ${personaje.name}, el personaje 7`)
    })
    .catch(onError)


