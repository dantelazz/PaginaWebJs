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
        <div class="col">
        <div class="card text-center bg-light  border-warning m-5">
  <div class="card-header text-uppercase fw-bold">
  ${circuito.nombre}
  </div>
  <div class="card-body">
  <img src="${circuito.imagen}" class="card-img-top" alt="...">
    <p class="card-text">Ubicacion: ${circuito.ubicacion}</p>
    <a href="#" class="btn btn-primary">Link</a>
  </div>
  <div class="card-footer text-muted">
    ${circuito.fecha}
  </div>
</div>
</div>
        `;
      });
      document.getElementById("resultados").innerHTML = html;
    });
}

cargarJSON();
