// Objetos y Arrays:
/*
const obj = {
    numero: 10,
    texto: "Nuevo Texto",

    objHijo: {
        nombre: "Mario",
        valor: 50
    }
};

console.log(obj);

const array = [
    "Marta",
    "Pedro",
    30,
    2,5
]

console.log(array);
*/

// Objetos:

const h1 = document.querySelector('h1')

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

console.log(objetos)

h1.textContent = objetos.otrosObjetos.varios;

console.log("edad: ", objetos.edad);

const titulo2 = document.getElementById('tituloSegundo');

console.log(titulo2);

titulo2.textContent = objetos.array1[0];

//h1.textContent = objetos.array1[2];

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
    ],
    obj = {
        todoNada : "Todo o Nada"
    }
];

console.log("array Curso", cursoFrontEnd);

const parrafo = document.getElementById('parrafo1')

// parrafo.textContent = cursoFrontEnd[3];

//parrafo.textContent = cursoFrontEnd.notas[0]; error
//parrafo.textContent = cursoFrontEnd[10].notas[0]; error

// forma correcta de acceder a arrays dentro de 1 array:
parrafo.textContent = cursoFrontEnd[10][2][0];

// Tarea 1: mostrar en su html el valor todoNada

console.log("parrafo: ", parrafo);