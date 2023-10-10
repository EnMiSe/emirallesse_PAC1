/* Programa validació camps formulari */

function validarFormulari() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var age = document.getElementById("age").value;
    var errors = [];

    if (username === "") {
        errors.push("El camp Nom d'usuari és obligatori.");
    }

    if (email === "") {
        errors.push("El camp Correu electrònic és obligatori.");
    } else if (!validarEmail(email)) {
        errors.push("El correu electrònic no és vàlid.");
    }

    if (password === "") {
        errors.push("El camp Contrasenya és obligatori.");
    }

    if (confirm_password === "") {
        errors.push("El camp Confirmar Contrasenya és obligatori.");
    } else if (password !== confirm_password) {
        errors.push("Les contrasenyes no coincideixen.");
    }

    if (age === "") {
        errors.push("El camp Edat és obligatori.");
    } else if (age < 0 || age > 1000) {
        errors.push("L'edat ha de ser un nombre major de 0 i menor que 1000.");
    }

    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false; 
    }
    return true; 
}

function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}



/* Programa validació edat */