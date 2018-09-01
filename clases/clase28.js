
const API_URL = "https://swapi.co/api/"
const PEOPLE_URL = 'people/:id'

const options = { crossDomain: true }

const onPeopleResponse = function (persona) {
    console.log(`Hola yo soy ${persona.name}`);
}

function obtenerPersona(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, options, onPeopleResponse)
}


obtenerPersona(1)
obtenerPersona(2)
obtenerPersona(3)

