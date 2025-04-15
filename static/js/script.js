function toggleLanguage() {
    const current = localStorage.getItem("language") || "ru";
    const newLang = current === "ru" ? "en" : "ru";
    localStorage.setItem("language", newLang);
    applyLanguage();
  }
  
  function applyLanguage() {
    const lang = localStorage.getItem("language") || "ru";
    document.documentElement.lang = lang;
  
    const btn = document.getElementById("lang-btn");
    if (btn) btn.textContent = lang === "ru" ? "EN" : "RU";
  
    const translations = {
      ru: {
        // меню
        "nav-index": "Главная",
        "nav-dashboard": "Статистика",
        "nav-tokens": "Купить токены",
        "nav-staking": "Стейкинг",
        "nav-profile": "Профиль",
        "nav-scripts": "Скрипты",
        "footer-text": "© 2025 Bitcoin Solo Mining Pool. Все права защищены.",
  
        // формы
        "main-title": "Купить токены",
        "main-description": "Выберите количество токенов и укажите ваш BTC-кошелёк",
        "label-wallet": "Адрес кошелька:",
        "wallet": "Введите адрес BTC кошелька",
        "label-amount": "Количество токенов:",
        "btn-buy-tokens": "Купить токены",
        "staking-title": "Стейкинг токенов",
        "staking-description": "Введите количество токенов и BTC-кошелёк для стейкинга.",
        "submit-button": "Отправить в стейкинг",
        "duration-30": "30 дней",
        "duration-60": "60 дней",
        "duration-90": "90 дней",
  
        // профиль
        "auth-title": "Авторизация",
        "auth-email": "Bitcoin-кошелёк",
        "auth-password": "Пароль",
        "auth-login-btn": "Войти",
        "reg-title": "Регистрация",
        "reg-username": "Имя пользователя",
        "reg-password": "Пароль",
        "reg-confirm-password": "Повторите пароль",
        "reg-btn": "Зарегистрироваться",
  
        // дашборд
        "dashboard-title": "Текущая статистика",
        "miners-label": "Активные майнеры:",
        "current-block-label": "Текущий блок:",
        "hashrate-label": "Общий хешрейт:",
  
        // скрипты
        "scripts-title": "Запуск Python-скриптов",
        "scripts-description": "Выберите скрипт из списка для запуска:",
        "script-output": "Результат выполнения будет здесь...:"
      },
      en: {
        "nav-index": "Home",
        "nav-dashboard": "Statistics",
        "nav-tokens": "Buy Tokens",
        "nav-staking": "Staking",
        "nav-profile": "Profile",
        "nav-scripts": "Scripts",
        "footer-text": "© 2025 Bitcoin Solo Mining Pool. All rights reserved.",
  
        "main-title": "Buy Tokens",
        "main-description": "Select token amount and enter your BTC wallet",
        "label-wallet": "Wallet Address:",
        "wallet": "Enter BTC wallet address",
        "label-amount": "Number of Tokens:",
        "btn-buy-tokens": "Buy Tokens",
        "staking-title": "Token Staking",
        "staking-description": "Enter token amount and wallet to stake.",
        "submit-button": "Stake Tokens",
        "duration-30": "30 days",
        "duration-60": "60 days",
        "duration-90": "90 days",
        "auth-title": "Login",
        "auth-email": "Bitcoin Wallet",
        "auth-password": "Password",
        "auth-login-btn": "Login",
        "reg-title": "Register",
        "reg-username": "Username",
        "reg-password": "Password",
        "reg-confirm-password": "Repeat password",
        "reg-btn": "Sign Up",
  
        "dashboard-title": "Current Statistics",
        "miners-label": "Active Miners:",
        "current-block-label": "Current Block:",
        "hashrate-label": "Total Hashrate:",
        "script-output": "The result of the execution will be here...",
        "scripts-title": "Run Python Scripts",
        "scripts-description": "Select a script to execute:"
      }
    };
  
    const current = translations[lang];
    for (const key in current) {
      const el = document.getElementById(key);
      if (!el) continue;
  
      if (["INPUT", "TEXTAREA"].includes(el.tagName)) {
        if (el.placeholder) el.placeholder = current[key];
        if (el.value && el.type !== "password") el.value = current[key];
      } else {
        el.textContent = current[key];
      }
  
      if (key === "page-title") document.title = current[key];
    }
  
    highlightActiveMenu();
  }
  
  function highlightActiveMenu() {
    const path = location.pathname.split("/").pop();
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
      const href = link.getAttribute("href");
      if (href && path && href.includes(path)) {
        link.classList.add("fw-bold", "text-warning");
      } else {
        link.classList.remove("fw-bold", "text-warning");
      }
    });
  }
  
  function runScript(scriptName) {
    const output = document.getElementById("script-output");
    output.textContent = "Выполняется...";
    fetch(`http://localhost:5000/run?script=${scriptName}`)
      .then(res => res.text())
      .then(data => output.textContent = data)
      .catch(err => output.textContent = "Ошибка запуска: " + err);
  }
  
  document.addEventListener("DOMContentLoaded", applyLanguage);
  