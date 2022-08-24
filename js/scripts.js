
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

//Menu Boton Arrancar
window.addEventListener('DOMContentLoaded', event => {
    const sidebarToggle = document.body.querySelector('#sidebarToggle2');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

//Sweet Alert

document.getElementById("botonInfo").addEventListener("click", event =>{
Swal.fire({
    title: 'Car Station',
    text: 'Aqui podras desde anotarte en ciurcuitos hasta encontrar herramientas extras para tu auto',
    width: 600,
    padding: '3em',
    color: '#121214',
    background: '#fff ',
    backdrop: `
    rgba(0,0,0,0.9)
    url("/assets/drift-cars.gif")
    left
    no-repeat
    `
})
})
