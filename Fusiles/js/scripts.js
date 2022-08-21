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
      let html = "";
      data.forEach(function (circuito) {
        html += `
        
        <div class="card text-center m-5">
  <div class="card-header text-uppercase">
  ${circuito.nombre}
  </div>
  <div class="card-body">
  <img src="${circuito.imagen}" class="card-img-top" alt="...">
    <p class="card-text">${circuito.ubicacion}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    ${circuito.fecha}
  </div>
</div>
        `;
      });
      document.getElementById("resultados").innerHTML = html;
    });
}

cargarJSON();
