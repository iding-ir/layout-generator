import React, { Component } from "react";
import "./controls.css";

class Controls extends Component {
  render() {
    let { inputs, selected, onChangeLayout } = this.props;

    return (
      <div className="controls">
        <select onChange={onChangeLayout}>
          {inputs.map((item, index) => {
            let text = item;
            let isSelected = selected === item;

            return (
              <option key={index} selected={isSelected}>
                {text}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Controls;
