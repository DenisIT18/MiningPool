import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Payouts from "./Payouts";
import Settings from "./Settings";
import "./styles.css";

function App() {
    const [theme, setTheme] = useState("light");
    const [stats, setStats] = useState({
        hashrate: "Загрузка...",
        miners: "Загрузка...",
        blocks: "Загрузка..."
    });

    useEffect(() => {
        document.body.className = theme;
        // Здесь можно подключить API/WebSocket для загрузки статистики
    }, [theme]);

    return (
        <Router>
            <div className={`app ${theme}`}>
                <header>
                    <h1>AI-оптимизированный Bitcoin Mining Pool</h1>
                    <nav>
                        <Link to="/dashboard">Дашборд</Link>
                        <Link to="/payouts">Выплаты</Link>
                        <Link to="/settings">Настройки</Link>
                        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>🌙</button>
                    </nav>
                </header>
                <section id="stats">
                    <h2>Статистика пула</h2>
                    <div className="stat-card"><p>Общая мощность:</p> <span>{stats.hashrate}</span></div>
                    <div className="stat-card"><p>Активные майнеры:</p> <span>{stats.miners}</span></div>
                    <div className="stat-card"><p>Найденные блоки:</p> <span>{stats.blocks}</span></div>
                </section>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/payouts" element={<Payouts />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

