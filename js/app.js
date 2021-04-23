

// Id:

document.querySelector('#tituloWeb')

console.log(document.querySelector('#tituloWeb'))

document.getElementById('tituloWeb')

console.log(document.getElementById('tituloWeb'))


// variables:

const varh3 = document.querySelector('h3')

const texto = 500

// Estoy llamando a un h3 que se ubica en el col-12 del primer row
//console.log("Este h3 corresponde al header: ", varh3)


//const parrafo = document.querySelector('p')

//parrafo.textContent = 'Este parrafo corresponde a mi producto estrella que se llama Curso Avanzado de Plataforma Web en JS '

//console.log(parrafo)


// Cambios de texto en los H3
// innerHTML no me funciona con otros elementos que no sea: querySelector
const cambiosH3 = document.querySelector('h3')

cambiosH3.innerHTML = '<div class="colorTexto bg-info m-3"> <b> Titulo </b> <small> General </small> </div>'

//console.log(cambiosH3)


/*
console.log('mensaje')
console.log(texto)
*/


































/*


// Ejercicio 1:
// paso 1: seleccionar elementos html

document.querySelector('h3')

console.log(document.querySelector('h3'))

// paso 2: acceder a una clase

console.log(document.querySelector('.text-danger'))

// id: acceder a un id

console.log(document.querySelector('#parrafo'))
console.log(document.getElementById('titulo1'))


// acceder a la misma clase en 2 elementos distintos:

console.log(document.querySelectorAll('.text-danger'))
console.log(document.querySelectorAll('h3'))

*/

/*
// Ejercicio 2:
const parrafo = document.querySelector('p')

// modificamos contenido:
parrafo.textContent = 'parrafo modificado por javascript'

parrafo.innerHTML = 'parrafo con innerHTML'

// parrafo.innerHTML = '<b class="display-1"> parrafo con innerHTML </b>'

// forma de agregar clases en js:
parrafo.classList.add('text-info', 'bg-warning')

console.log(parrafo)

*/
