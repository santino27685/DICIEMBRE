function applyDarkMode() {
    document.body.classList.add("dark-mode");
    document.querySelectorAll(".input-group input").forEach(function (input) {
        input.classList.add("dark-mode");
    });
    document.querySelectorAll(".btn").forEach(function (btn) {
        btn.classList.add("dark-mode");
    });
    document.querySelectorAll(".login-box, .register-box").forEach(function (box) {
        box.classList.add("dark-mode");
    });
    document.querySelectorAll(".welcome-text").forEach(function (text) {
        text.classList.add("dark-mode");
    });
    document.querySelectorAll("p a").forEach(function (link) {
        link.classList.add("dark-mode");
    });
    document.querySelectorAll(".theme-toggle a").forEach(function (link) {
        link.classList.add("dark-mode");
    });
    document.querySelectorAll(".image-box img").forEach(function (img) {
        img.classList.add("dark-mode");
    });
}

function removeDarkMode() {
    document.body.classList.remove("dark-mode");
    document.querySelectorAll(".input-group input").forEach(function (input) {
        input.classList.remove("dark-mode");
    });
    document.querySelectorAll(".btn").forEach(function (btn) {
        btn.classList.remove("dark-mode");
    });
    document.querySelectorAll(".login-box, .register-box").forEach(function (box) {
        box.classList.remove("dark-mode");
    });
    document.querySelectorAll(".welcome-text").forEach(function (text) {
        text.classList.remove("dark-mode");
    });
    document.querySelectorAll("p a").forEach(function (link) {
        link.classList.remove("dark-mode");
    });
    document.querySelectorAll(".theme-toggle a").forEach(function (link) {
        link.classList.remove("dark-mode");
    });
    document.querySelectorAll(".image-box img").forEach(function (img) {
        img.classList.remove("dark-mode");
    });
}

if (localStorage.getItem("theme") === "dark") {
    applyDarkMode();
}

document.querySelectorAll("#toggleTheme").forEach(function (toggle) {
    toggle.addEventListener("click", function () {
        if (document.body.classList.contains("dark-mode")) {
            removeDarkMode();
            localStorage.setItem("theme", "light");
        } else {
            applyDarkMode();
            localStorage.setItem("theme", "dark");
        }
    });
});