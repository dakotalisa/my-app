import React from "react";
import './index.scss';
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Регистрация</Link>
        </li>
        <li>
          <Link to="/auth">Авторизация</Link>
        </li>
      </ul>
    );
  }
}


export default Menu;
