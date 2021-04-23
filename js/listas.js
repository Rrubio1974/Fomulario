// Inserción de elemenetos HTML Anidados

// Opcion 1: Agregamos 1 solo elemento a nuestra lista
const lista = document.getElementById('lista')

const li = document.createElement('li')
li.textContent = 'Primer Elemento de la lista'
lista.appendChild(li)

// Opcion 2: Agregar multiples elementos a nuestra lista::
// Crearemos un Array para incorporar la informacion a nuestra lista:

const lista2 = document.getElementById('lista2')

const elementos = ['Primer Elemento de la lista',
                    'Segundo Elemento de la lista',
                    'Tercer Elemento de la lista',
                    'Cuarto Elemento de la lista']

elementos.forEach(item => {
    console.log('item: ', item)
    const li2 = document.createElement('li')
    li2.textContent = item
    lista2.appendChild(li2)
})


// Opcion 3:

const lista3 = document.getElementById('lista3')

const elementos2 = ['Elemento 1',
                    'Elemento 2',
                    'Elemento 3',
                    'Elemento 4']

elementos2.forEach(ele => {
    lista3.innerHTML += `<li>${ele}</li>`
})


const elementosSeleccionados = []

// agregamos un array completo:
//elementosSeleccionados.push(elementos)

// agregamos algun elemento interno de algun array, usando su index:
elementosSeleccionados.push(elementos[1], elementos[3])

console.log('elemSelec: ', elementosSeleccionados) //elementosSeleccionados[elementos[aasjohdjhoas]]

elementosSeleccionados.push(elementos[0])


/*
// elementos HTML:
document.querySelector('h1')

console.log(document.querySelector('h1'))

// Clases:

document.querySelector('.bg-info')

console.log(document.querySelector('.bg-info'))

// forma de agregar clases en js:

const tituloPrincipal = document.querySelector('h1')

tituloPrincipal.classList.add('colorTexto', 'bg-warning', 'col-6')

const parrafoPrincipal = document.querySelector('p')

parrafoPrincipal.classList.add('text-success', 'col-6')

*/


/*

// Id:

document.querySelector('#tituloWeb')

console.log(document.querySelector('#tituloWeb'))

document.getElementById('tituloWeb')

console.log(document.getElementById('tituloWeb'))


// variables:

const varh3 = document.querySelector('h3')

const texto = 500

// Estoy llamando a un h3 que se ubica en el col-12 del primer row
console.log("Este h3 corresponde al header: ", varh3)


const parrafo = document.querySelector('p')

parrafo.textContent = 'Este parrafo corresponde a mi producto estrella que se llama Curso Avanzado de Plataforma Web en JS '

console.log(parrafo)


// Cambios de texto en los H3
// innerHTML no me funciona con otros elementos que no sea: querySelector
const cambiosH3 = document.querySelector('h3')

cambiosH3.innerHTML = '<div class="colorTexto bg-info m-3"> <b> Titulo </b> <small> General </small> </div>'

console.log(cambiosH3)

*/

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
