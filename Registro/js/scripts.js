
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
    



let autos={
    marca:"",
    modelo:"",
    year:"",
    email:""
}

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

/// Ventana Modal

