import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Главная
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Вход в кабинет
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/posts">
          Записи
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contacts">
          Контакты
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          to="/posts?fromUrl=https://example.partner.com&block=pr_1"
        >
          Партнерская ссылка
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
