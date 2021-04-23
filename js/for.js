// Carga de arriba a abajo, es decir, Sincrono, no Asincrono
/*
function Iteracion()
{
    for( let i = 0; i < 10000; i++)
    {
        console.log("imprimiendo");
    }
}

Iteracion();

function Clickeado()
{
    console.log("Botón clickleado");
}
*/

// En esta parte declaro mis variables:

const div1 = document.querySelector('#div1')
const div2 = document.getElementById('div2')

const objetos =
{
    nombre: "Gustavo Almuna",
    edad: 20,
    profesion: "Desarrollador de Aplicaciones",
    nivel: 100,
    decimales: 3.5,
    "varios":"varios muchos",
    "pedroEdad": 25,

    otrosObjetos:
    {
        varios: "varios objetos"
    },

    array1: [
        20, 30, 40
    ]
}
const cursoFrontEnd = [
    "Vanessa",
    "Yerko",
    "Esteban",
    "Fanny",
    "Juan Carlos",
    25,
    23,
    35,
    20,
    22,
    notas = [
        "Pablo",
        50,
        array3 = [
            "Vane"
        ]
    ]
];
const arrayElementos = [
    100,
    200,
    "Pedro",
    "Pablo"
]

// Seccion 2: Todas las funciones a declarar:

// Veremos bucles: for
// creamos una funcion de javascript para operarlos

function Bucle()
{
    const lista = document.getElementById('listaObjeto');

    // Bucles: for opcion 1
    for(let nombre of cursoFrontEnd) // let variable (interna) of Array
    {
        const li = document.createElement('li')
        li.textContent = nombre
        lista.appendChild(li)
    }

    /*
    punto 1: no puedo usar el bucle for con variables de tipo objetos.
    punto 2: solo funciona con arrays
    */

    console.log(lista)
}

function Bucle2()
{
    // los for o bucles solo funcionan con arrays:
    for(let i=0; i < 1000; i++) // tipo de variable (var, let, const) nombreVariable (i) = 0;
                                // i < array o numero;
                                // i++
    {
        console.log("imprimiendo en consola: ");
    }
}

//Bucle2();

function Bucle3()
{
    for(let i = 999; i >= 0; i--)
    {
        console.log("Cuenta regresiva: ", i);
    }
}

//Bucle3();

arrayElementos.forEach(item => {
    console.log(item);
    const h1 = document.createElement('h1');
    h1.textContent = item;
    div1.appendChild(h1);
})

function EventoBoton()
{
    console.log("Boton Presionado");

    //alert("Esta Alerta es rara!!")

    const divAlerta = document.createElement('div');
    divAlerta.innerHTML = '<div class="alert alert-primary" role="alert"> A simple primary alert—check it out! </div>'
    div2.appendChild(divAlerta);
    
}

// --------------------------------- //
