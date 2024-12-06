document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "admin" && password === "1234") {
        errorMessage.textContent = "Inicio de sesión exitoso";
        errorMessage.style.color = "green";
        setTimeout(function() {
            window.location.href = "/home";
        }, 2000);
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos";
        errorMessage.style.color = "red";
    }
});