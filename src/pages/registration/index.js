import React from "react";
import './index.scss';

class Registration extends React.Component {
  render() {
    return (
      <div className="registration">
        <div className="registration__exit">x</div>
        <input type="text" className="registration__input-email" placeholder="email"/>
        <input type="text" className="registration__input-fname" placeholder="first name"/>
        <input type="text" className="registration__input-lname" placeholder="last name"/>
        <input type="date" className="registration__input-birthday" placeholder="birthday"/>
        <input type="boolean" className="registration__input-subscribe" placeholder="subscribe"/>
        <select>
            <option disabled="disabled" placeholder="gender">Выберите пол:</option>
            <option value="men">мужской</option>
            <option value="women">женский</option>
        </select>
        <div className="registration__send">жмяк</div>
      </div>
    );
  }
}

export default Registration;
