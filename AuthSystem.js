// auth.js - Фронтенд логика для авторизации с JWT и 2FA

// URL сервера API (замени на свой)
const API_URL = 'https://api.miningpool.com';

// Функция входа в систему
async function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    
    const data = await response.json();
    if (data.token) {
        localStorage.setItem('jwt', data.token);
        if (data.otp_required) {
            show2FAVerification();
        } else {
            window.location.href = 'dashboard.html';
        }
    } else {
        alert('Ошибка входа!');
    }
}

// Функция проверки 2FA
async function verify2FA(event) {
    event.preventDefault();
    const otp = document.getElementById('otp').value;
    const token = localStorage.getItem('jwt');
    
    const response = await fetch(`${API_URL}/auth/verify-2fa`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ otp })
    });
    
    const data = await response.json();
    if (data.success) {
        window.location.href = 'dashboard.html';
    } else {
        alert('Неверный код!');
    }
}

// Восстановление пароля
async function resetPassword(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    
    const response = await fetch(`${API_URL}/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    });
    
    const data = await response.json();
    alert(data.message || 'Проверьте вашу почту!');
}

// Показать форму 2FA
function show2FAVerification() {
    document.getElementById('auth-form').style.display = 'none';
    document.getElementById('2fa-form').style.display = 'block';
}

// Подключение обработчиков событий
document.getElementById('login-form')?.addEventListener('submit', login);
document.getElementById('2fa-form')?.addEventListener('submit', verify2FA);
document.getElementById('reset-form')?.addEventListener('submit', resetPassword);
