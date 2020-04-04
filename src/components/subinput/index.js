import React from "react";
import './index.scss';

function validatorRequired(value) {
    return value === ('' || null || undefined) ? 'Нужно заполнить' : ''
  }

class Subinput extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: props.value };
        this.handleChange = this.handleChange.bind(this);
       }

       handleChange(event) {
        this.setState({value: event.target.value});
      }
     
    render() {
        return (
            <div>
                <input
                    type="boolean" 
                    className="registration__input-subscribe" 
                    value={ this.state.value }
                    placeholder={ this.props.placeholder }
                    onChange={ this.handleChange }
                />
                { validatorRequired(this.state.value) }
            </div>
        )
    }
}

export default Subinput;