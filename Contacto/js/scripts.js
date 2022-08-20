
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
// Funcion de Libreria Sweet Alert


document.getElementById("botonEnviar").addEventListener("click", event =>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Mensaje Enviado',
        showConfirmButton: false,
        timer: 800,
        background:'black',
      })

})
