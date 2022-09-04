
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
document.getElementById("confirmadoModal").addEventListener("click", event =>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Reserva Confirmada',
        showConfirmButton: false,
        timer: 800,
        background:'black',
})

})

    

//Data guardada
let autosGuardados = {};
let formularioFinal = {};



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

   autosGuardados = autos;
}

// Esta funcion guarda los datos del 2do formulario en un objeto
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

formularioFinal = formulario
console.log(formularioFinal)

}



// Ventana modal
var modal = document.getElementById("ventanaModal");

// Botón que abre el modal
var boton = document.getElementById("botonEnviar2");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click",function() {
    document.getElementById('texto').innerHTML = 

    "Marca: " + autosGuardados.marca + "<br/>"+
    "Modelo: " + autosGuardados.modelo + "<br/>"+

    "Pista: "+ formularioFinal.pista + "<br/>" +
     "Categoria :" + formularioFinal.categoria+ "<br/>" +
     "Fecha: "+ formularioFinal.fecha + "<br/>" +
     "Hora: "+ formularioFinal.hora + "<br/>",



  modal.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click",function() {
  modal.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

function agregarDatos(){
  let marca = document.getElementById("inputmarca");
  let modelo = document.getElementById("inputmodelo");
  let year = document.getElementById("inputyear");
  let email = document.getElementById("email");
  var miPersona=new Persona(nombre,edad,dni,profesion);
  baseDatos.push(miPersona); 
  alert("agregado");
}

addButton.onclick=agregarDatos;

let cerrarModal = () => {
    addEventListener("click",function() {
        modal.style.display = "none";
      })

}