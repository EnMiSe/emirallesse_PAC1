document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let age = parseInt(document.getElementById("age").value);
    resetErrors();

    if (username.length < 3) {
        showError("username", "L'usuari ha de contenir almenys 3 caràcters");
    }
    if (!isValidEmail(email)) {
        showError("email", "Email no vàlid");
    }
    if (password.length < 6) {
        showError("password", "La contrasenya ha de contenir 6 caràcters");
    } else if (!isValidPassword(password)) {
        showError("password", "La contrasenya ha de contenir lletres majúscules, minúscules, números i els símbols permesos");
    }
    if (password !== confirmPassword) {
        showError("confirm-password", "Les contrasenyes no coincideixen");
    }
    if (isNaN(age) || age < 0 || age >= 1000) {
        showError("age", "L'edat ha de ser major o igual a 0 i inferior a 1000");
    }
});

function showError(inputId, message) {
    let inputField = document.getElementById(inputId).parentElement;
    let errorElement = inputField.querySelector(".error");
    errorElement.textContent = message;
    errorElement.style.display = "block";
}
function resetErrors() {
    let errorElements = document.querySelectorAll(".error");
    errorElements.forEach((error) => {
        error.style.display = "none";
    });
}
function isValidEmail(email) {
    let validacio = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return validacio.test(email);
}
function isValidPassword(password) {
    let validacio = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+={}\[\]:;<>,.?])[A-Za-z\d~!@#$%^&*()_+={}\[\]:;<>,.?]{8,}$/;
    return validacio.test(password);
}