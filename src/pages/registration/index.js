import React from 'react';
import './index.scss';
import {Input} from '../../components';
import {Dateinput} from '../../components';
import {Subinput} from '../../components';


class Registration extends React.Component {
  render() {
    return (
      <div className="registration">
        <div className="registration__exit">x</div>
        <Input placeholder="email" />
        <Input placeholder="first name" />
        <Input placeholder="last name" />
        <Dateinput placeholder="birthday"/> 
        <Subinput placeholder="subscribe"/>
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

//<Dateinput placeholder="birthday" /> 
export default Registration;
