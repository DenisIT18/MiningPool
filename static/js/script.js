// static/js/script.js

// ====== TRANSLATIONS ======
const translations = {
  ru: {
    "nav-index": "Главная", "nav-dashboard": "Статистика", "nav-tokens": "Купить токены", "nav-staking": "Стейкинг",
    "nav-profile": "Профиль", "nav-scripts": "Скрипты", "nav-connection": "Связь", "nav-roadmap": "Дорожная карта",
    "footer-text": "© 2025 Bitcoin Solo Mining Pool. Все права защищены.",
    "dashboard-title": "Текущая статистика", "current-block-label": "Текущий блок:", "hashrate-label": "Общий хешрейт:",
    "miners-label": "Активные майнеры:", "main-title": "Купить токены", "main-description": "Выберите количество токенов и укажите ваш BTC-кошелёк",
    "label-wallet": "Адрес кошелька:", "label-amount": "Количество токенов:", "btn-buy-tokens": "Купить токены",
    "staking-title": "Стейкинг токенов", "staking-description": "Введите количество токенов и BTC-кошелёк для стейкинга.",
    "submit-button": "Отправить в стейкинг", "duration-30": "30 дней", "duration-60": "60 дней", "duration-90": "90 дней",
    "scripts-title": "Запуск Python-скриптов", "scripts-description": "Выберите скрипт из списка для запуска:", "script-output": "Результат выполнения будет здесь...",
    "contact-title": "Связь с нами", "contact-description": "По вопросам обращайтесь на почту:", "contact-description_1": "Ответим в течение 24 часов.",
    "roadmap-title": "Дорожная карта", "roadmap-description": "Этапы развития нашего пула",
    "th-stage": "Этап", "th-timeline": "Сроки", "th-tasks": "Задачи",
    "td-stage1": "Stage 1: Подготовка", "td-task1": "Проектирование, условия, тестирование",
    "td-stage2": "Stage 2: Бета",      "td-task2": "Тестовые пользователи, отладка",
    "td-stage3": "Stage 3: Запуск",     "td-task3": "Регистрация, статистика, выплаты",
    "td-stage4": "Stage 4: Масштаб",    "td-task4": "Улучшения и регионы",
    "td-month1": "Май 2025", "td-month2": "Июнь 2025", "td-month3": "Июль 2025", "td-month4": "Сентябрь 2025",
      "auth-title": "Вход",
  "placeholder-login-email": "Bitcoin-кошелёк (хэш)",
  "placeholder-login-password": "Пароль",
  "btn-login": "Войти",
  "link-forgot": "Забыли пароль?",
  "link-register": "Зарегистрироваться",
  "label-duration": "Срок:",
    "stat-wallet": "Ваш BTC-кошелёк",
    "stat-current-hashrate": "Текущий хешрейт",
    "stat-avg-hashrate": "Средний хешрейт",
    "stat-unpaid": "Невыплачено",
    "stat-workers-online": "Майнеров онлайн",
    "stat-earnings-24h": "Заработано за 24ч",
    "stat-earnings-30d": "Заработано за 30д",
    "stat-last-share": "Последняя шара",
    "stat-hashrate-chart": "График хешрейта"
  },
  en: {
    "nav-index": "Home", "nav-dashboard": "Statistics", "nav-tokens": "Buy Tokens", "nav-staking": "Staking",
    "nav-profile": "Profile", "nav-scripts": "Scripts", "nav-connection": "Contact", "nav-roadmap": "Roadmap",
    "footer-text": "© 2025 Bitcoin Solo Mining Pool. All rights reserved.",
    "dashboard-title": "Current Statistics", "current-block-label": "Current Block:", "hashrate-label": "Total Hashrate:",
    "miners-label": "Active Miners:", "main-title": "Buy Tokens", "main-description": "Select token amount and enter your BTC wallet",
    "label-wallet": "Wallet Address:", "label-amount": "Number of Tokens:", "btn-buy-tokens": "Buy Tokens",
    "staking-title": "Token Staking", "staking-description": "Enter token amount and wallet to stake.",
    "submit-button": "Stake Tokens", "duration-30": "30 days", "duration-60": "60 days", "duration-90": "90 days",
    "scripts-title": "Run Python Scripts", "scripts-description": "Select a script to execute:", "script-output": "Execution result will appear here...",
    "contact-title": "Contact Us", "contact-description": "For questions, email us at:", "contact-description_1": "We will respond within 24 hours.",
    "roadmap-title": "Project Roadmap", "roadmap-description": "Development milestones of our mining pool",
    "th-stage": "Stage", "th-timeline": "Timeline", "th-tasks": "Tasks",
    "td-stage1": "Stage 1: Planning","td-task1": "Design, Requirements, Testing",
    "td-stage2": "Stage 2: Beta",    "td-task2": "Test Users, Debugging",
    "td-stage3": "Stage 3: Launch",  "td-task3": "Registration, Stats, Payouts",
    "td-stage4": "Stage 4: Scaling", "td-task4": "Improvements & Regions",
    "td-month1": "May 2025", "td-month2": "June 2025", "td-month3": "July 2025", "td-month4": "September 2025",
      "auth-title": "Login",
  "placeholder-login-email": "BTC wallet (hash)",
  "placeholder-login-password": "Password",
  "btn-login": "Login",
  "link-forgot": "Forgot password?",
  "link-register": "Register",
  "label-duration": "Duration:",
    "stat-wallet": "Your BTC Wallet",
    "stat-current-hashrate": "Current Hashrate",
    "stat-avg-hashrate": "Average Hashrate",
    "stat-unpaid": "Unpaid",
    "stat-workers-online": "Workers Online",
    "stat-earnings-24h": "Earned 24h",
    "stat-earnings-30d": "Earned 30d",
    "stat-last-share": "Last Share",
    "stat-hashrate-chart": "Hashrate Chart"
  },
  de: {
    "nav-index": "Startseite", "nav-dashboard": "Statistik", "nav-tokens": "Token kaufen", "nav-staking": "Staking",
    "nav-profile": "Profil", "nav-scripts": "Skripte", "nav-connection": "Kontakt", "nav-roadmap": "Fahrplan",
    "footer-text": "© 2025 Bitcoin Solo Mining Pool. Alle Rechte vorbehalten.",
    "dashboard-title": "Aktuelle Statistiken", "current-block-label": "Aktueller Block:", "hashrate-label": "Gesamte Hashrate:",
    "miners-label": "Aktive Miner:", "main-title": "Token kaufen", "main-description": "Wählen Sie die Token-Anzahl und geben Sie Ihre BTC-Adresse ein",
    "label-wallet": "Wallet-Adresse:", "label-amount": "Anzahl der Token:", "btn-buy-tokens": "Token kaufen",
    "staking-title": "Token-Staking", "staking-description": "Geben Sie die Anzahl und Ihre Wallet für das Staking ein.",
    "submit-button": "Staken", "duration-30": "30 Tage", "duration-60": "60 Tage", "duration-90": "90 Tage",
    "scripts-title": "Python-Skripte ausführen", "scripts-description": "Wählen Sie ein Skript zum Ausführen aus:", "script-output": "Ergebnis der Ausführung erscheint hier...",
    "contact-title": "Kontaktieren Sie uns", "contact-description": "Bei Fragen schreiben Sie uns:", "contact-description_1": "Wir werden innerhalb von 24 Stunden antworten.",
    "roadmap-title": "Fahrplan", "roadmap-description": "Entwicklungsetappen unseres Pools",
    "th-stage": "Phase", "th-timeline": "Zeitplan", "th-tasks": "Aufgaben",
    "td-stage1": "Phase 1: Planung", "td-task1": "Entwurf, Anforderungen, Tests",
    "td-stage2": "Phase 2: Beta",    "td-task2": "Testnutzer, Fehlerbehebung",
    "td-stage3": "Phase 3: Start",   "td-task3": "Registrierung, Statistik, Auszahlungen",
    "td-stage4": "Phase 4: Skalierung","td-task4": "Verbesserungen & Regionen",
    "td-month1": "Mai 2025", "td-month2": "Juni 2025", "td-month3": "Juli 2025", "td-month4": "September 2025",
      "auth-title": "Anmelden",
  "placeholder-login-email": "BTC Wallet (Hash)",
  "placeholder-login-password": "Passwort",
  "btn-login": "Einloggen",
  "link-forgot": "Passwort vergessen?",
  "link-register": "Registrieren",
  "label-duration": "Dauer:",
    "stat-wallet": "Ihre BTC-Wallet",
    "stat-current-hashrate": "Aktuelle Hashrate",
    "stat-avg-hashrate": "Durchschn. Hashrate",
    "stat-unpaid": "Nicht ausgezahlt",
    "stat-workers-online": "Miner online",
    "stat-earnings-24h": "Ertrag 24h",
    "stat-earnings-30d": "Ertrag 30d",
    "stat-last-share": "Letzter Share",
    "stat-hashrate-chart": "Hashrate Diagramm"
  },
  zh: {
    "nav-index": "主页", "nav-dashboard": "统计", "nav-tokens": "购买代币", "nav-staking": "质押",
    "nav-profile": "账户", "nav-scripts": "脚本", "nav-connection": "联系", "nav-roadmap": "路线图",
    "footer-text": "© 2025 比特币独立矿池。保留所有权利。",
    "dashboard-title": "当前统计", "current-block-label": "当前区块：", "hashrate-label": "总算力：",
    "miners-label": "活跃矿工：", "main-title": "购买代币", "main-description": "选择代币数量并输入您的 BTC 钱包地址",
    "label-wallet": "钱包地址：", "label-amount": "代币数量：", "btn-buy-tokens": "购买代币",
    "staking-title": "代币质押", "staking-description": "输入数量和钱包地址开始质押。",
    "submit-button": "开始质押", "duration-30": "30 天", "duration-60": "60 天", "duration-90": "90 天",
    "scripts-title": "运行 Python 脚本", "scripts-description": "选择要执行的脚本：", "script-output": "执行结果将在此显示...",
    "contact-title": "联系我们", "contact-description": "有问题请发邮件至：", "contact-description_1": "我们将在 24 小时内回复。",
    "roadmap-title": "路线图", "roadmap-description": "我们挖矿池的开发阶段",
    "th-stage": "阶段", "th-timeline": "时间表", "th-tasks": "任务",
    "td-stage1": "阶段 1：规划", "td-task1": "设计，需求，测试",
    "td-stage2": "阶段 2：测试版","td-task2": "测试用户，调试",
    "td-stage3": "阶段 3：上线","td-task3": "注册，统计，付款",
    "td-stage4": "阶段 4：扩展","td-task4": "改进与区域拓展",
    "td-month1": "2025年5月", "td-month2": "2025年6月", "td-month3": "2025年7月", "td-month4": "2025年9月",
      "auth-title": "登录",
  "placeholder-login-email": "BTC 钱包（哈希）",
  "placeholder-login-password": "密码",
  "btn-login": "登录",
  "link-forgot": "忘记密码？",
  "link-register": "注册",
  "label-duration": "时长：",
    "stat-wallet": "您的比特币钱包",
    "stat-current-hashrate": "当前算力",
    "stat-avg-hashrate": "平均算力",
    "stat-unpaid": "未支付",
    "stat-workers-online": "在线矿工",
    "stat-earnings-24h": "24小时收益",
    "stat-earnings-30d": "30天收益",
    "stat-last-share": "最近一次提交",
    "stat-hashrate-chart": "算力图表"
  }
};

// ====== LANGUAGE SWITCHER ======
function toggleLanguage() {
  const current = localStorage.getItem("language") || "ru";
  const next = current === "ru" ? "en"
             : current === "en" ? "de"
             : current === "de" ? "zh"
             : "ru";
  localStorage.setItem("language", next);
  applyLanguage();
}

function applyLanguage() {
  const lang = localStorage.getItem("language") || "ru";
  document.documentElement.lang = lang;

  // Update language button label
  const btn = document.getElementById("lang-btn");
  if (btn) {
    const labels = { ru: "RU", en: "EN", de: "DE", zh: "中文" };
    btn.textContent = labels[lang];
  }

  // Translate elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const txt = translations[lang]?.[key];
    if (txt != null) el.textContent = txt;
  });

  // Translate placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const ph = translations[lang]?.[key];
    if (ph != null) el.placeholder = ph;
  });

  // Translate <title> if data-i18n-title on <html>
  const titleKey = document.documentElement.getAttribute("data-i18n-title");
  if (titleKey) {
    const t = translations[lang]?.[titleKey];
    if (t) document.title = t;
  }
}

// ====== THEME SWITCHER ======
function toggleTheme() {
  const current = localStorage.getItem("theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  localStorage.setItem("theme", next);
  applyTheme();
}

function applyTheme() {
  const theme = localStorage.getItem("theme") || "dark";
  document.body.classList.remove("dark-theme", "light-theme");
  document.body.classList.add(theme + "-theme");
}

// ====== NAVIGATION HIGHLIGHT ======
function highlightActiveMenu() {
  const path = location.pathname.split("/").pop();
  document.querySelectorAll("nav a.btn-nav, nav a").forEach(el => {
    const href = el.getAttribute("href");
    if (href === path) {
      el.classList.add("fw-bold", "text-warning");
    } else {
      el.classList.remove("fw-bold", "text-warning");
    }
  });
}

// ====== HASH WAVE ANIMATION ======
function startHashWave() {
  const canvas = document.getElementById("hashWave");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let blocks = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  function colorFromProgress(p, variance = 0) {
    const r = Math.min(255, Math.max(0, Math.floor(255 * (1 - p) + variance)));
    const g = Math.min(255, Math.max(0, Math.floor(255 * p + variance)));
    return `rgb(${r},${g},50)`;
  }

  function generateBlock() {
    if (blocks.length >= 15) return;
    const size = 50 + Math.random() * 30;
    const height = 900000 - Math.floor(Math.random() * 100);
    const speedX = 0.5 + Math.random();
    const yBase = 50 + Math.random() * (canvas.height - size - 100);
    const block = { x: -size, y: yBase, yBase, size, speedX, speedY:0, waveOffset:Math.random()*100, height, inner:[] };

    // Create 4 inner blocks
    const corners = [{x:0.05,y:0.05},{x:0.65,y:0.05},{x:0.05,y:0.65},{x:0.65,y:0.65}];
    for (let i=0; i<4; i++) {
      const s = size*(0.25+Math.random()*0.1);
      const ox = size*corners[i].x, oy = size*corners[i].y;
      block.inner.push({
        x: ox, y: oy, size: s,
        dx: (Math.random()-0.5)*0.5,
        dy: (Math.random()-0.5)*0.5,
        variance: Math.floor(Math.random()*160 - 80)
      });
    }

    // Avoid overlap
    if (!blocks.some(b => Math.abs(b.x - block.x) < size && Math.abs(b.y - block.y) < size)) {
      blocks.push(block);
    }
  }

  function handleCollisions() {
    for (let i=0; i<blocks.length; i++){
      for (let j=i+1; j<blocks.length; j++){
        const a = blocks[i], b = blocks[j];
        if (Math.abs(a.x - b.x) < Math.max(a.size, b.size) &&
            Math.abs(a.y - b.y) < Math.max(a.size, b.size)) {
          [a.speedX, b.speedX] = [b.speedX, a.speedX];
          a.speedY = (Math.random()-0.5)*0.5;
          b.speedY = (Math.random()-0.5)*0.5;
        }
      }
    }
  }

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    blocks.forEach(block => {
      block.y += block.speedY;
      const p = block.x / canvas.width;
      const col = colorFromProgress(p);
      const wave = Math.sin((block.x + block.waveOffset) / 60) * 10;
      const y = block.y + wave;

      // Front face
      ctx.fillStyle = col;
      ctx.fillRect(block.x, y, block.size, block.size);

      // Top face
      ctx.fillStyle = "rgba(255,255,255,0.1)";
      ctx.beginPath();
      ctx.moveTo(block.x, y);
      ctx.lineTo(block.x + block.size*0.15, y - block.size*0.15);
      ctx.lineTo(block.x + block.size*1.15, y - block.size*0.15);
      ctx.lineTo(block.x + block.size, y);
      ctx.closePath();
      ctx.fill();

      // Side face
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.beginPath();
      ctx.moveTo(block.x + block.size, y);
      ctx.lineTo(block.x + block.size*1.15, y - block.size*0.15);
      ctx.lineTo(block.x + block.size*1.15, y + block.size*0.85);
      ctx.lineTo(block.x + block.size, y + block.size);
      ctx.closePath();
      ctx.fill();

      // Height text
      ctx.fillStyle = "#fff";
      ctx.font = "12px monospace";
      ctx.fillText("height: " + block.height, block.x, y - 5);

      // Inner blocks
      block.inner.forEach(ib => {
        ib.x += ib.dx; ib.y += ib.dy;
        // Inner collision
        block.inner.forEach(b2 => {
          if (b2 === ib) return;
          const dx = (ib.x + ib.size/2) - (b2.x + b2.size/2);
          const dy = (ib.y + ib.size/2) - (b2.y + b2.size/2);
          const dist = Math.hypot(dx, dy);
          if (dist < (ib.size + b2.size)/2) {
            [ib.dx, b2.dx] = [b2.dx, ib.dx];
            [ib.dy, b2.dy] = [b2.dy, ib.dy];
          }
        });
        if (ib.x < 0 || ib.x + ib.size > block.size) ib.dx *= -1;
        if (ib.y < 0 || ib.y + ib.size > block.size) ib.dy *= -1;
        const ix = block.x + ib.x, iy = y + ib.y;
        ctx.fillStyle = colorFromProgress(p, ib.variance);
        ctx.fillRect(ix, iy, ib.size, ib.size);
        ctx.strokeStyle = "#000";
        ctx.strokeRect(ix, iy, ib.size, ib.size);
      });

      block.x += block.speedX;
    });

    // Remove off-screen blocks
    blocks = blocks.filter(b => b.x <= canvas.width + b.size);
    handleCollisions();
  }

  function animate() {
    draw();
    requestAnimationFrame(animate);
  }

  setInterval(generateBlock, 2000);
  animate();
}

// ====== INITIALIZATION ======
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage();
  applyTheme();
  highlightActiveMenu();
  startHashWave();

  document.getElementById("lang-btn")?.addEventListener("click", toggleLanguage);
  document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);
});

// ====== HASHRATE CHART FOR DASHBOARD ======
document.addEventListener("DOMContentLoaded", () => {
  const chartCanvas = document.getElementById("hashrateChart");
  if (!chartCanvas) return;

  const ctx = chartCanvas.getContext("2d");
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      datasets: [{
        label: 'TH/s',
        data: Array.from({ length: 24 }, () => 280 + Math.random() * 60),
        borderColor: 'gold',
        backgroundColor: 'rgba(255, 215, 0, 0.2)',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
});

function updateStatus() {
  fetch("http://localhost:3001/api/status")
    .then(res => res.json())
    .then(data => {
      document.getElementById("current-block").textContent = data.blockCount;
      document.getElementById("hashrate").textContent = (data.hashRate / 1e12).toFixed(2) + " TH/s";
      document.getElementById("difficulty").textContent = data.difficulty.toLocaleString();
      document.getElementById("mempool").textContent = `${data.mempoolSize} txs / ${Math.round(data.mempoolBytes / 1024)} KB`;
      document.getElementById("block-hash").textContent = data.blockHash;
      document.getElementById("block-tx").textContent = data.blockTxs;
      document.getElementById("block-time").textContent = data.latestBlockTime;
    })
    .catch(err => console.error("Ошибка получения данных от ноды:", err));
}

updateStatus();                 // Первый запуск сразу
setInterval(updateStatus, 60000); // Затем каждые 60 секунд
