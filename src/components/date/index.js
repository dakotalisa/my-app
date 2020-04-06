import React from "react";
import './index.scss';

class Date extends React.Component {

  render() {
    return (
      <div>
        <input
          type="date"
          className="registration__input-birthday"
          placeholder="birthday"
        />
      </div>
    )
  }
}

export default Date;
