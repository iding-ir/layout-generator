import React, { Component } from "react";
import "./controls.css";

class Controls extends Component {
  render() {
    let { inputs, onChangeLayout } = this.props;

    return (
      <div className="controls">
        <select onChange={onChangeLayout}>
          {inputs.map((item, index) => {
            let text = item;
            return <option key={index}>{text}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default Controls;
