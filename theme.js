document.querySelectorAll("#toggleTheme").forEach(function (toggle) {
    toggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        document.querySelector("nav").classList.toggle("dark-mode");
        document.querySelectorAll(".input-group input").forEach(function (input) {
            input.classList.toggle("dark-mode");
        });
        document.querySelectorAll(".btn").forEach(function (btn) {
            btn.classList.toggle("dark-mode");
        });
        document.querySelectorAll("nav ul li a").forEach(function (link) {
            link.classList.toggle("dark-mode");
        });
        document.querySelectorAll(".login-box, .register-box").forEach(function (box) {
            box.classList.toggle("dark-mode");
        });
        document.querySelectorAll(".welcome-text").forEach(function (text) {
            text.classList.toggle("dark-mode");
        });
        document.querySelectorAll("p a").forEach(function (link) {
            link.classList.toggle("dark-mode");
        });
        document.querySelectorAll(".theme-toggle a").forEach(function (link) {
            link.classList.toggle("dark-mode");
        });
        document.querySelectorAll(".image-box img").forEach(function (img) {
            img.classList.toggle("dark-mode");
        });
    });
});