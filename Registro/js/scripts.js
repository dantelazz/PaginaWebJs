
// Menu deslizante
window.addEventListener('DOMContentLoaded', event => {
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

// Codigo del Sweet Alert

// Swal.fire({
//     title: 'Tiene su auto registrado?',
//     text: "Debe tenerlo para seguir la reserva",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Si!',
//     cancelButtonText: 'No'
//     ///Para Cambiar el registro
// })
    

//Data guardada
let autosGuardados = [];
let formularioFinal = [];


// Esta funcion guarda los datos del formulario en un objeto
let getdataPrimerSeccion= () => {

    let autos={
        marca:"",
        modelo:"",
        year:"",
        email:""
    }

    let marca = document.getElementById("inputmarca").value;
    autos.marca = marca;
    let modelo = document.getElementById("inputmodelo").value;
    autos.modelo = modelo
    let year = document.getElementById("inputyear").value;
    autos.year = year;
    let email = document.getElementById("inputemail").value;
    autos.email =email;

    autosGuardados.push(autos)
}

let getdataSegundaSeccion = () => {
    let formulario = {
        pista:"",
        categoria:"",
        fecha:"",
        hora:""
    }

let pista = document.getElementById("inputPista").value;
formulario.pista = pista;

let categoria = document.getElementById("inputCategoria").value;
formulario.categoria = categoria;

let fecha = document.getElementById("inputFecha").value;
formulario.fecha = fecha;

let hora = document.getElementById("inputHora").value;
formulario.hora = hora;

formularioFinal.push(formulario)
}

//Codigo del Sweet Alert

// Swal.fire({
//     title: 'Tiene su auto registrado?',
//     text: "La pista es"+formularioFinal.pista,
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Si!',
//     cancelButtonText: 'No'
//     ///Para Cambiar el registro
// })
    