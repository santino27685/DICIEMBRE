document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(user => user.username === username && user.password === password);

    if (user) {
        errorMessage.textContent = "Inicio de sesión exitoso";
        errorMessage.style.color = "green";
        setTimeout(function() {
            document.querySelector("nav").classList.add("hidden");
            document.getElementById("loginFormContainer").innerHTML = `
                <h1>404</h1>
                <p>¡Página no encontrada! Esta sección está en construcción, pero puedes volver al inicio para seguir explorando.</p>
                <button id="logout" class="btn logout">Cerrar sesión</button>
            `;
            document.getElementById("logout").addEventListener("click", function () {
                location.reload();
            });
        }, 2000);
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos";
        errorMessage.style.color = "red";
    }
});

document.getElementById("navLogin").addEventListener("click", function () {
    document.getElementById("loginBox").style.display = "flex";
    document.getElementById("registerBox").style.display = "none";
    document.getElementById("navLogin").classList.add("active");
    document.getElementById("navRegister").classList.remove("active");
});