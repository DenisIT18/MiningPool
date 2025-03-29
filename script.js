document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loading").style.display = "none";

    document.getElementById("login-btn").addEventListener("click", login);
    document.getElementById("register-link").addEventListener("click", register);
});

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && savedUser.username === username && savedUser.password === password) {
        alert("Вход выполнен!");
        document.getElementById("user-id").textContent = savedUser.id;
        document.getElementById("btc-wallet").textContent = savedUser.wallet;
    } else {
        alert("Неверный логин или пароль!");
    }
}

function register() {
    const username = prompt("Введите логин:");
    const password = prompt("Введите пароль:");
    const id = Math.floor(Math.random() * 10000);
    const wallet = `BTC-${Math.random().toString(36).substr(2, 10).toUpperCase()}`;

    localStorage.setItem("user", JSON.stringify({ username, password, id, wallet }));

    alert("Регистрация успешна! Теперь войдите в систему.");
}




