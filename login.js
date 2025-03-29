document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const country = document.getElementById("country").value;
        const password = document.getElementById("password").value;

        if (firstName && lastName && country && password) {
            const user = {
                id: Math.floor(Math.random() * 100000),
                btcWallet: "1BitcoinWalletExample123" // Здесь можно будет добавить генерацию кошелька
            };

            localStorage.setItem("user", JSON.stringify(user));
            window.location.href = "index.html"; // Возвращаем пользователя
        }
    });
});
