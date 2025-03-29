import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">🏠 Главная</Link></li>
        <li><Link to="/payouts">💰 Выплаты</Link></li>
        <li><Link to="/settings">⚙️ Настройки</Link></li>
        <li><Link to="/profile">👤 Профиль</Link></li>
        <li><Link to="/register">🔑 Регистрация</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
