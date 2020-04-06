import React from 'react';
import { Date, Input, Menu, Subscribe } from '../../components';
import './index.scss';

class Registration extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Menu />
        <div className="registration">
          <div className="registration__exit">x</div>
          <Input placeholder="email" />
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Date placeholder="birthday" />
          <Subscribe placeholder="subscribe" />
          <select>
            <option disabled="disabled" placeholder="gender">Выберите пол:</option>
            <option value="men">мужской</option>
            <option value="women">женский</option>
          </select>
          <div className="registration__send">жмяк</div>
        </div>
      </div>
    );
  }
}

export default Registration;
