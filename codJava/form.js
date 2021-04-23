console.log('funcionando');

const formu = document.getElementById("formulario");

//console.log("formu: ", formu);

formu.addEventListener("submit", function(ev){
    //preventDefault():
    ev.preventDefault();

    //new FormData()
    const datos = new FormData(formu);

    console.log(datos.get("email"));
    console.log(datos.get("nombre"));
    console.log(datos.get("password"));
    console.log(datos.get("comuna"));
    console.log(datos.get("comentarios"));
    console.log(datos.get("despacho"));
    console.log(datos.get("pickup"));

    //console.log(formu);

    const id = document.getElementById('contenido');
    const idAlerta = document.getElementById('idAlerta');
    const booleana= true;

    const email = datos.get("email");
    const nombre = datos.get("nombre");
    const password = datos.get("password");
    const comuna = datos.get("comuna");
    const comentarios = datos.get("comentarios");
    const despacho = datos.get("despacho");
    const pickup = datos.get("pickup")

    id.innerHTML = `
        <li class="display-5">${email}</li>
        <li class="display-5">${nombre}</li>
        <li class="display-5">${password}</li>
        <li class="display-5">${comuna}</li>
        <li class="display-5">${comentarios}</li>
        <li class="display-5">${despacho}</li>
        <li class="display-5">${pickup}</li>
    `;

    if(email === '' || nombre === '' || password === '' || comuna === '' || comentarios === '' || despacho === null || pickup === null ){
        idAlerta.innerHTML = `<div class="alert alert-danger" role="alert">
        Por favor complete sus datos!!!
        </div>`;

        console.log('aparece mi alerta danger');
    }

    else{
        idAlerta.innerHTML = `<div class="alert alert-success" role="alert">
        Nos contactaremos a la brevedad posible
        </div>`;

        console.log('aparece mi alerta success');

        alert('Datos Enviados Correctamente')
    }

    

});