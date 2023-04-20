import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Главная</Link>
      </li>
      <li>
        <Link to="/login">Вход в кабинет</Link>
      </li>
      <li>
        <Link to="/posts">Записи</Link>
      </li>
      <li>
        <Link to="/contacts">Контакты</Link>
      </li>
    </ul>
  );
};

export default NavBar;
