function toggleLanguage() {
  const current = localStorage.getItem("language") || "ru";
  const next = current === "ru" ? "en" : current === "en" ? "de" : current === "de" ? "zh" : "ru";

  localStorage.setItem("language", next);
  applyLanguage();
}

function applyLanguage() {
  const lang = localStorage.getItem("language") || "ru";
  document.documentElement.lang = lang;
  const btn = document.getElementById("lang-btn");
  if (btn) {
    const btnLabel = { ru: "RU", en: "EN", de: "DE", zh: "中文" };
    btn.textContent = btnLabel[lang] || "EN";
  }

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
    "contact-title": "Связь с нами", "contact-description": "По вопросам обращайтесь на почту:",
    "roadmap-title": "Дорожная карта", "roadmap-description": "Этапы развития нашего пула",
    "th-stage": "Этап",
    "th-timeline": "Сроки",
    "th-tasks": "Задачи",
    "td-stage1": "Stage 1: Подготовка",
    "td-stage2": "Stage 2: Бета",
    "td-stage3": "Stage 3: Запуск",
    "td-stage4": "Stage 4: Масштаб",
    "td-task1": "Проектирование, условия, тестирование",
    "td-task2": "Тестовые пользователи, отладка",
    "td-task3": "Регистрация, статистика, выплаты",
    "td-task4": "Улучшения и регионы",
    "td-month1": "Май 2025",
    "td-month2": "Июнь 2025",
    "td-month3": "Июль 2025",
    "td-month4": "Сентябрь 2025"
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
    "contact-title": "Contact Us", "contact-description": "For questions, email us at:",
    "roadmap-title": "Project Roadmap", "roadmap-description": "Development milestones of our mining pool",
    "th-stage": "Stage",
    "th-timeline": "Timeline",
    "th-tasks": "Tasks",
    "td-stage1": "Stage 1: Planning",
    "td-stage2": "Stage 2: Beta",
    "td-stage3": "Stage 3: Launch",
    "td-stage4": "Stage 4: Scaling",
    "td-task1": "Design, Requirements, Testing",
    "td-task2": "Test Users, Debugging",
    "td-task3": "Registration, Stats, Payouts",
    "td-task4": "Improvements & Regions",
    "td-month1": "May 2025",
    "td-month2": "June 2025",
    "td-month3": "July 2025",
    "td-month4": "September 2025"
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
    "contact-title": "Kontaktieren Sie uns", "contact-description": "Bei Fragen schreiben Sie uns:",
    "roadmap-title": "Fahrplan", "roadmap-description": "Entwicklungsetappen unseres Pools",
    "th-stage": "Phase",
    "th-timeline": "Zeitplan",
    "th-tasks": "Aufgaben",
    "td-stage1": "Phase 1: Planung",
    "td-stage2": "Phase 2: Beta",
    "td-stage3": "Phase 3: Start",
    "td-stage4": "Phase 4: Skalierung",
    "td-task1": "Entwurf, Anforderungen, Tests",
    "td-task2": "Testnutzer, Fehlerbehebung",
    "td-task3": "Registrierung, Statistik, Auszahlungen",
    "td-task4": "Verbesserungen & Regionen",
    "td-month1": "Mai 2025",
    "td-month2": "Juni 2025",
    "td-month3": "Juli 2025",
    "td-month4": "September 2025"
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
    "contact-title": "联系我们", "contact-description": "有问题请发邮件至：",
    "roadmap-title": "路线图", "roadmap-description": "我们挖矿池的开发阶段",
    "th-stage": "阶段",
    "th-timeline": "时间表",
    "th-tasks": "任务",
    "td-stage1": "阶段 1：规划",
    "td-stage2": "阶段 2：测试版",
    "td-stage3": "阶段 3：上线",
    "td-stage4": "阶段 4：扩展",
    "td-task1": "设计，需求，测试",
    "td-task2": "测试用户，调试",
    "td-task3": "注册，统计，付款",
    "td-task4": "改进与区域拓展",
    "td-month1": "2025年5月",
    "td-month2": "2025年6月",
    "td-month3": "2025年7月",
    "td-month4": "2025年9月"
  }
};

  const current = translations[lang];
  for (const key in current) {
    const el = document.getElementById(key);
    if (!el) continue;
    if (["INPUT", "TEXTAREA"].includes(el.tagName)) {
      if (el.placeholder) el.placeholder = current[key];
    } else {
      el.textContent = current[key];
    }
    if (key === "page-title") document.title = current[key];
  }

  highlightActiveMenu();
}

function highlightActiveMenu() {
  const path = location.pathname.split("/").pop();
  const links = document.querySelectorAll("nav a, .btn-nav");
  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href && path && href.includes(path)) {
      link.classList.add("fw-bold", "text-warning");
    } else {
      link.classList.remove("fw-bold", "text-warning");
    }
  });
}

// 🧱 Анимация блоков с ограничением 15 шт
function startHashWave() {
  const canvas = document.getElementById("hashWave");
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  const blockHeightBase = 900000;
  const blocks = [];

  function colorFromProgress(x, variance = 0) {
    const r = Math.min(255, Math.max(0, Math.floor(255 * (1 - x) + variance)));
    const g = Math.min(255, Math.max(0, Math.floor(255 * x + variance)));
    return `rgb(${r},${g},50)`;
  }

  function generateBlock() {
    const size = 50 + Math.random() * 30;
    const height = blockHeightBase - Math.floor(Math.random() * 100);
    const speed = 0.5 + Math.random();
    const y = 50 + Math.random() * (canvas.height - size - 100);
    const waveOffset = Math.random() * 100;

    const newBlock = {
      x: -size,
      y,
      baseY: y,
      size,
      speedX: speed,
      speedY: 0,
      waveOffset,
      height,
      inner: []
    };

    // Проверка на пересечение по позиции
    const overlaps = blocks.some(b => {
      return (
        Math.abs(b.x - newBlock.x) < newBlock.size &&
        Math.abs(b.y - newBlock.y) < newBlock.size
      );
    });

    if (overlaps) return;
    const innerCorners = [
      { x: 0.05, y: 0.05 }, // левый верх
      { x: 0.65, y: 0.05 }, // правый верх
      { x: 0.05, y: 0.65 }, // левый низ
      { x: 0.65, y: 0.65 }  // правый низ
    ];
    // внутренние блоки
    const innerCount = 4 + Math.floor(Math.random() * 6);
    for (let i = 0; i < 4; i++) {
      const s = newBlock.size * (0.25 + Math.random() * 0.1); // 25-35% от размера
      const ox = newBlock.size * innerCorners[i].x;
      const oy = newBlock.size * innerCorners[i].y;
      const dx = (Math.random() - 0.5) * 0.5;
      const dy = (Math.random() - 0.5) * 0.5;
      const colorVar = Math.floor(Math.random() * 160 - 80);
      newBlock.inner.push({ x: ox, y: oy, size: s, dx, dy, colorVar });
    }


    blocks.push(newBlock);
  }

  function handleCollisions() {
    for (let i = 0; i < blocks.length; i++) {
      for (let j = i + 1; j < blocks.length; j++) {
        const a = blocks[i];
        const b = blocks[j];
        if (
          Math.abs(a.x - b.x) < Math.max(a.size, b.size) &&
          Math.abs(a.y - b.y) < Math.max(a.size, b.size)
        ) {
          // простая реакция отскока по X
          const temp = a.speedX;
          a.speedX = b.speedX;
          b.speedX = temp;

          // лёгкий разброс по Y
          a.speedY = (Math.random() - 0.5) * 0.5;
          b.speedY = (Math.random() - 0.5) * 0.5;
        }
      }
    }
  }

  function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    blocks.forEach(block => {
      block.y += block.speedY;
      const progress = block.x / canvas.width;
      const color = colorFromProgress(progress);
      const waveY = Math.sin((block.x + block.waveOffset) / 60) * 10;
      const y = block.y + waveY;

      // основной блок
          // передняя грань (основной цвет)
    ctx.fillStyle = color;
    ctx.fillRect(block.x, y, block.size, block.size);

    // верхняя грань
    ctx.fillStyle = "rgba(255,255,255,0.1)";
    ctx.beginPath();
    ctx.moveTo(block.x, y);
    ctx.lineTo(block.x + block.size * 0.15, y - block.size * 0.15);
    ctx.lineTo(block.x + block.size * 1.15, y - block.size * 0.15);
    ctx.lineTo(block.x + block.size, y);
    ctx.closePath();
    ctx.fill();

    // боковая грань
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.beginPath();
    ctx.moveTo(block.x + block.size, y);
    ctx.lineTo(block.x + block.size * 1.15, y - block.size * 0.15);
    ctx.lineTo(block.x + block.size * 1.15, y + block.size * 0.85);
    ctx.lineTo(block.x + block.size, y + block.size);
    ctx.closePath();
    ctx.fill();

      ctx.fillStyle = "#fff";
      ctx.font = "12px monospace";
      ctx.fillText("height: " + block.height, block.x, y - 5);

      // внутренние блоки
      block.inner.forEach(ib => {
        ib.x += ib.dx;
        ib.y += ib.dy;
                // столкновение между внутренними
        for (let j = 0; j < block.inner.length; j++) {
          const b2 = block.inner[j];
          if (ib === b2) continue;
          const dx = (ib.x + ib.size / 2) - (b2.x + b2.size / 2);
          const dy = (ib.y + ib.size / 2) - (b2.y + b2.size / 2);
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < (ib.size + b2.size) / 2) {
            // простой отскок — обмен скоростями
            const tempDx = ib.dx;
            ib.dx = b2.dx;
            b2.dx = tempDx;
            const tempDy = ib.dy;
            ib.dy = b2.dy;
            b2.dy = tempDy;
          }
        }

        if (ib.x < 0 || ib.x + ib.size > block.size) ib.dx *= -1;
        if (ib.y < 0 || ib.y + ib.size > block.size) ib.dy *= -1;

        const ix = block.x + ib.x;
        const iy = y + ib.y;
        ctx.fillStyle = colorFromProgress(progress, ib.colorVar);
        ctx.fillRect(ix, iy, ib.size, ib.size);
        ctx.strokeStyle = "#000";
        ctx.strokeRect(ix, iy, ib.size, ib.size);
      });

      block.x += block.speedX;
    });

    // удалить ушедшие
    for (let i = blocks.length - 1; i >= 0; i--) {
      if (blocks[i].x > canvas.width + blocks[i].size) {
        blocks.splice(i, 1);
      }
    }

    handleCollisions();
  }

  setInterval(() => {
    if (blocks.length < 15) generateBlock();
  }, 2000);

  function animate() {
    drawFrame();
    requestAnimationFrame(animate);
  }

  animate();
}


document.addEventListener("DOMContentLoaded", () => {
  applyLanguage();     // ⬅️ перевод всех элементов на нужный язык
  startHashWave();     // ⬅️ запуск анимации блоков
});
