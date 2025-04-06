<script>
    // Функция для переключения языка интерфейса
    function toggleLanguage() {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === "ru" ? "en" : "ru";
        localStorage.setItem("language", newLang);
        location.reload();
    }

    // Функция для применения выбранного языка
    function applyLanguage() {
        const lang = localStorage.getItem("language") || "ru";
        document.documentElement.lang = lang;
        document.getElementById("lang-btn").textContent = lang === "ru" ? "EN" : "RU";

        const translations = {
            ru: {
                "page-title": "Майнинг-Пул | Статистика",
                "title": "Майнинг-Пул Bitcoin",
                "nav-dashboard": "Статистика",
                "nav-tokens": "Купить токены",
                "nav-staking": "Стейкинг",
                "nav-profile": "Профиль",
                "dashboard-title": "Текущая статистика",
                "miners-label": "Активные майнеры:",
                "block-label": "Текущий блок:",
                "hashrate-label": "Общий хешрейт:",
                "recent-blocks-title": "Последние блоки",
                "th-block": "Блок",
                "th-reward": "Награда",
                "th-miner": "Майнер",
                "th-time": "Время"
            },
            en: {
                "page-title": "Mining Pool | Statistics",
                "title": "Bitcoin Mining Pool",
                "nav-dashboard": "Statistics",
                "nav-tokens": "Buy Tokens",
                "nav-staking": "Staking",
                "nav-profile": "Profile",
                "dashboard-title": "Current Statistics",
                "miners-label": "Active Miners:",
                "block-label": "Current Block:",
                "hashrate-label": "Total Hashrate:",
                "recent-blocks-title": "Recent Blocks",
                "th-block": "Block",
                "th-reward": "Reward",
                "th-miner": "Miner",
                "th-time": "Time"
            }
        };

        for (const key in translations[lang]) {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = translations[lang][key];
            }
        }
    }

    // Функция для получения и отображения данных с сервера
    async function fetchData() {
        try {
            const response = await fetch('https://example.com/api/stats'); // Замените на URL вашего API
            const data = await response.json();

            // Обновление статистики
            document.getElementById("miners-count").textContent = data.miners || 0;
            document.getElementById("current-block").textContent = data.current_block || '—';
            document.getElementById("hashrate").textContent = data.hashrate ? `${data.hashrate} TH/s` : '0 TH/s';

            // Обновление таблицы блоков
            const blocksTable = document.getElementById("blocks-table");
            blocksTable.innerHTML = ""; // очистка таблицы

            if (data.blocks && data.blocks.length > 0) {
                data.blocks.forEach(block => {
                    const row = document.createElement("tr");

                    row.innerHTML = `
                        <td>${block.height}</td>
                        <td>${block.reward} BTC</td>
                        <td>${block.miner}</td>
                        <td>${new Date(block.time * 1000).toLocaleString()}</td>
                    `;

                    blocksTable.appendChild(row);
                });
            } else {
                blocksTable.innerHTML = `<tr><td colspan="4">Нет данных</td></tr>`;
            }

        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
            document.getElementById("blocks-table").innerHTML = `<tr><td colspan="4">Ошибка загрузки данных</td></tr>`;
        }
    }

    // Запускаем всё при загрузке страницы
    document.addEventListener("DOMContentLoaded", () => {
        applyLanguage();
    });    
</script>

