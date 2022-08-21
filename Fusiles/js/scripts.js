// Menu deslizante
window.addEventListener("DOMContentLoaded", (event) => {
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
    });
  }
});

//Funcion para llamar los datos del json:

function cargarJSON() {
  fetch("/assets/circuitos.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let html='';
      data.forEach(function(circuito){
        html += `
        <div class="card" style="width:20rem;">
        <div class="card-body">
        <img src="${circuito.imagen}" class="card-img-top" alt="...">
        <h4 class="card-title">${circuito.nombre}</h4>
        <h6 class="card-subtitle mb-2 text-muted">${circuito.ubicacion}</h6>
        <h7 class="card-subtitle mb-2 text-muted">${circuito.fecha}</h7>
        <p class="card-text">This card has no image but has subtitle and two links instead of button.</p>
        <a href="#" class="card-link">Link 1</a>
        </div>
        </div>
        `;
      })
      document.getElementById('resultados').innerHTML = html;
    });
}

cargarJSON();
