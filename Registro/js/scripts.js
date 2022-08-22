
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

Swal.fire({
    title: 'Tiene su auto registrado?',
    text: "Debe tenerlo para seguir la reserva",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si!',
    cancelButtonText: 'No'
    ///Para Cambiar el registro
}).then((result) => {
    if (result.isConfirmed) {
    }
})

  //Constante para Los formularios

  const autos = {
  }

  const corredores = {

  }

  // funcion para crear el formulario Si acepta


  let formularioSi = function(){
    let html = "";
    html += `
    <div class="container" id="container1">
    <div class="col-md-6 col-md-offset-3" id="colorDiv">
        <div class="col-md-6 col-md-offset-3" id="innerDiv">
            <div class="page-header">
                <h3>Log in</h3>
            </div>
            <form>
                <div class="form-group">
                    <label for="userInput">Username or E-mail</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="passwordConfirm">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                    <small><a href="#" id="frgPass">Forgot password?</a></small>
                </div>
                <div class="form-group" id="smth">
                    <label for="securityQuestion">Security Question?</label>
                    <select name="secQuest" id="dropdown">
                        <option value="0">Where was your mother born?</option>
                        <option value="1">What was your first car?</option>
                        <option value="2">What was the first name of your first pet?</option>
                        <option value="3">What was your school name?</option>
                        <option value="4">Where were you born?</option>
                        <option value="5">What model your first smartphone was?</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="secQuestAnswer">Type your security question here</label>
                    <input type="text" class="form-control" id="security_question" placeholder="Answer here">
                </div>
            </form>
            <button type="submit" id="submitBtn">Log in</button>
            <br />
            <div class="footer">
                
            </div>            
        </div>
    </div>    
</div>
        `;
        document.getElementById("Formularios").innerHTML = html;
  }


  formularioSi()
  // funcion para crear el formulario No acepta