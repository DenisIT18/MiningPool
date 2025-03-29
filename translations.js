const translations = {
    ru: {
        title: "Авторизация",
        "main-title": "Крипто Платформа",
        "nav-stats": "Статистика",
        "nav-profile": "Профиль",
        "stats-title": "Статистика",
        "auth-title": "Вход",
        "login-btn": "Войти",
        "register-text": "Нет аккаунта?",
        "register-link": "Зарегистрироваться"
    },
    en: {
        title: "Authorization",
        "main-title": "Crypto Platform",
        "nav-stats": "Statistics",
        "nav-profile": "Profile",
        "stats-title": "Statistics",
        "auth-title": "Login",
        "login-btn": "Login",
        "register-text": "No account?",
        "register-link": "Sign up"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const langSelect = document.getElementById("language-select");

    if (localStorage.getItem("lang")) {
        langSelect.value = localStorage.getItem("lang");
        changeLanguage(langSelect.value);
    }

    langSelect.addEventListener("change", () => {
        changeLanguage(langSelect.value);
        localStorage.setItem("lang", langSelect.value);
    });
});

function changeLanguage(lang) {
    document.title = translations[lang]["title"];
    Object.keys(translations[lang]).forEach(id => {
        const element = document.getElementById(id);
        if (element) element.textContent = translations[lang][id];
    });
}
