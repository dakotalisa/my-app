import React from "react";
import './index.scss';

class Input extends React.Component {

  constructor(props) {
   super(props);
   this.state = { value: props.value };
  }

  render() {
    return (
      <input
        type="text"
        className="input"
        value={this.state.value}
        placeholder={ this.props.placeholder }
      />
    )
  }
}


export default Input;
