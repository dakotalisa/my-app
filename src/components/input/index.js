import React from "react";
import './index.scss';
//import { required as validatorReqired } from 'src/utils/validators';

function validatorRequired(value) {
  return value === ('' || null || undefined) ? 'Нужно заполнить' : ''
}

class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="input"
          value={this.state.value}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
        {validatorRequired(this.state.value)}
      </div>
    )
  }
}


export default Input;
