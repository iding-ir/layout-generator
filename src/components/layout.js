import React, { Component } from "react";
import "./layout.css";

class Layout extends Component {
  render() {
    let layout = this.props.layout;

    return (
      <div className="layout-container">
        {layout.map(item => {
          let className = "layout-" + item;
          let text = item;

          return (
            <div className={className}>
              <div className="layout-content">
                <span>{text}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Layout;