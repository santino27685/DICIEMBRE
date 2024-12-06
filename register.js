document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("register-confirm-password").value;
    const errorMessage = document.getElementById("register-error-message");

    if (!username || !email || !password || !confirmPassword) {
        errorMessage.textContent = "Todos los campos son obligatorios";
        errorMessage.style.color = "red";
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Las contraseñas no coinciden";
        errorMessage.style.color = "red";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Formato de email incorrecto";
        errorMessage.style.color = "red";
        return;
    }

    const passwordPattern = /^(?=.*\d).{6,}$/;
    if (!passwordPattern.test(password)) {
        errorMessage.textContent = "La contraseña debe tener al menos 6 caracteres y contener al menos un número";
        errorMessage.style.color = "red";
        return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = storedUsers.some(user => user.username === username);
    const emailExists = storedUsers.some(user => user.email === email);

    if (userExists) {
        errorMessage.textContent = "El nombre de usuario ya existe";
        errorMessage.style.color = "red";
        return;
    }

    if (emailExists) {
        errorMessage.textContent = "El correo electrónico ya está registrado";
        errorMessage.style.color = "red";
        return;
    }

    storedUsers.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(storedUsers));

    errorMessage.textContent = "Registro exitoso";
    errorMessage.style.color = "green";
    setTimeout(function() {
        document.querySelector("nav").classList.add("hidden");
        document.getElementById("registerFormContainer").innerHTML = `
            <h1>404</h1>
            <p>¡Página no encontrada! Esta sección está en construcción, pero puedes volver al inicio para seguir explorando.</p>
            <button id="logout" class="btn logout">Cerrar sesión</button>
        `;
        document.getElementById("logout").addEventListener("click", function () {
            location.reload();
        });
    }, 2000);
});

document.getElementById("showRegisterForm").addEventListener("click", function () {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("registerBox").style.display = "flex";
    document.getElementById("navLogin").classList.remove("active");
    document.getElementById("navRegister").classList.add("active");
});

document.getElementById("showLoginForm").addEventListener("click", function () {
    document.getElementById("loginBox").style.display = "flex";
    document.getElementById("registerBox").style.display = "none";
    document.getElementById("navLogin").classList.add("active");
    document.getElementById("navRegister").classList.remove("active");
});

document.getElementById("navRegister").addEventListener("click", function () {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("registerBox").style.display = "flex";
    document.getElementById("navLogin").classList.remove("active");
    document.getElementById("navRegister").classList.add("active");
});

document.getElementById("navLogin").addEventListener("click", function () {
    document.getElementById("loginBox").style.display = "flex";
    document.getElementById("registerBox").style.display = "none";
    document.getElementById("navLogin").classList.add("active");
    document.getElementById("navRegister").classList.remove("active");
});