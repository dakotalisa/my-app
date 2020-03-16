import React from "react";
import './index.scss';

class Info extends React.Component {
  render() {
    return (
      //<div className="body">
      <div className="first">
        <p>
          <div className="exit">x</div>
        </p>
            <input type="buuton" className="vvod login" value="логин"/>
            <input type="buuton" className="vvod parol" value="пароль"/>
        <p>
          <div className="send">жмяк</div>
        </p>
      </div>
    //</div>
    );
  }
}

export default Info;
