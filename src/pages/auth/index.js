import React from "react";
import { Menu } from '../../components';
import './index.scss';


class Auth extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Menu />
        <div className="auth">
          <div className="auth__exit">x</div>
          <input type="text" className="auth__button-login" value="логин" />
          <input type="password" className="auth__button-password" value="пароль" />
          <div className="auth__send">жмяк</div>
        </div>
      </div>
    );
  }
}

export default Auth;
