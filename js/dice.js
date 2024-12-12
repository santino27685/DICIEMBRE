function initializeDiceGame(username) {
    let totalRolls = 0;

    document.querySelector(".container").classList.add("dice-page");

    document.getElementById("loginFormContainer").innerHTML = `
        <div class="dice-container">
            <div class="dice-info">
                <h2>¡Bienvenido, ${username}!</h2>
                <p id="totalRolls">Total acumulado: ${totalRolls}</p>
            </div>
            <box-icon id="dice" name='dice-1' size="lg"></box-icon>
        </div>
        <button id="rollDice" class="btn roll">Tirar</button>
        <p id="diceResult"></p>
        <button id="logout" class="btn logout">Cerrar sesión</button>
    `;

    document.getElementById("rollDice").addEventListener("click", function () {
        const result = Math.floor(Math.random() * 6) + 1;
        totalRolls++;
        document.getElementById("dice").setAttribute('name', `dice-${result}`);
        document.getElementById("totalRolls").textContent = `Total acumulado: ${totalRolls}`;
    });

    document.getElementById("logout").addEventListener("click", function () {
        localStorage.removeItem("activeSession");
        document.querySelector(".container").classList.remove("dice-page");
        location.reload();
    });
}