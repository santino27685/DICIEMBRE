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

        localStorage.setItem("activeSession", JSON.stringify({ username, timestamp: Date.now() }));

        setTimeout(function () {
            localStorage.removeItem("activeSession");
            alert("La sesión ha expirado. Por favor, inicie sesión nuevamente.");
            location.reload();
        }, 10 * 60 * 1000);

        setTimeout(function() {
            document.getElementById("loginFormContainer").innerHTML = `
                <h1>404</h1>
                <p>¡Página no encontrada! Esta sección está en construcción, pero puedes volver al inicio para seguir explorando.</p>
                <button id="logout" class="btn logout">Cerrar sesión</button>
            `;
            document.getElementById("logout").addEventListener("click", function () {
                localStorage.removeItem("activeSession");
                location.reload();
            });
        }, 2000);
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos";
        errorMessage.style.color = "red";
    }
});

window.addEventListener("load", function () {
    const activeSession = JSON.parse(localStorage.getItem("activeSession"));
    if (activeSession) {
        const currentTime = Date.now();
        const sessionTime = activeSession.timestamp;
        const elapsedTime = currentTime - sessionTime;

        if (elapsedTime < 10 * 60 * 1000) {
            document.getElementById("loginFormContainer").innerHTML = `
                <h1>404</h1>
                <p>¡Página no encontrada! Esta sección está en construcción, pero puedes volver al inicio para seguir explorando.</p>
                <button id="logout" class="btn logout">Cerrar sesión</button>
            `;
            document.getElementById("logout").addEventListener("click", function () {
                localStorage.removeItem("activeSession");
                location.reload();
            });

            setTimeout(function () {
                localStorage.removeItem("activeSession");
                alert("La sesión ha expirado. Por favor, inicie sesión nuevamente.");
                location.reload();
            }, 10 * 60 * 1000 - elapsedTime);
        } else {
            localStorage.removeItem("activeSession");
        }
    }
});