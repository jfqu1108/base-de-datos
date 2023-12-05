const inputNombre = document.querySelector("#nombre");
const inputEmail = document.querySelector("#email");
const inputContraseña = document.querySelector("#contraseña");
const inputConfirmContraseña = document.querySelector("#Confirmar_contraseña");

const formulario = document.querySelector(".formulario");

const alert = document.createElement("DIV") //crea el elemento de la alerta

if (inputNombre.value === "") {
    alert.textContent = "Este campo es obligatorio";
    alert.classList.add("alert", "alert__error");
    inputNombre.parentElement.appendChild(alert);

    setTimeout(() => {
        alert.remove()
    }, 3000);
}

if (inputEmail.value === "") {
    alert.textContent = "Este campo es obligatorio";
    alert.classList.add("alert", "alert__error");
    inputEmail.parentElement.appendChild(alert);

    setTimeout(() => {
        alert.remove()
    }, 3000)
}


if (inputContraseña.value === "") {
    alert.textContent = "Este campo es obligatorio";
    alert.classList.add("alert", "alert__error");
    inputContraseña.parentElement.appendChild(alert);

    setTimeout(() => {
        alert.remove()
    }, 3000)
    
}

if (inputConfirmContraseña.value != inputContraseña.value) {
    alert.textContent = "Las contraseñas no coinciden";
    alert.classList.add("alert", "alert__error");
    inputConfirmContraseña.parentElement.appendChild(alert);

    setTimeout(() => {
        alert.remove()
    }, 3000)
}
