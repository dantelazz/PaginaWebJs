
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

let getdata = function(){

    let marca = document.getElementById("inputmarca").value;
    console.log(marca)

}


getdata();