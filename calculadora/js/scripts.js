console.log("hola")
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


function calculaAltoTotalRueda() {
    let ancho = document.getElementById("ancho").value
    let perfil = document.getElementById("perfil").value
    let rodado = document.getElementById("rodado").value
    let altoTotalRueda = ((ancho * 100 / perfil) / 10) + (rodado * 2.54)
    let total = altoTotalRueda.toFixed(2)
    document.getElementById('respuesta').innerHTML = "La altura total es: " + total + "cms";
    //Expresado En Cms
}

