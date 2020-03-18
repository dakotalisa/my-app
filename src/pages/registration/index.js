import React from "react";
import './index.scss';

class Registration extends React.Component {
  render() {
    return (
      <div className="registration">
        <div className="registration__exit">x</div>
        <input type="text" className="registration__input-email" value="email"/>
        <input type="text" className="registration__input-fname" value="first name"/>
        <input type="text" className="registration__input-lname" value="last name"/>
        <input type="date" className="registration__input-birthday" value="birthday"/>
        <input type="boolean" className="registration__input-subscribe" value="subscribe"/>
        <input type="select -M-F-Undefined" className="registration__input-gender" value="gender"/>
        <select>
            <option disabled="disabled" value="gender">Выберите пол:</option>
            <option value="men">мужской</option>
            <option value="women">женский</option>
        </select>
        <div className="registration__send">жмяк</div>
      </div>
    );
  }
}

export default Registration;
