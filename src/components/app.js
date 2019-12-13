import React, { Component } from "react";
import "./app.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="layout-container">
        <div className="layout-xl">
          <div className="layout-content">
            <span>LG</span>
          </div>
        </div>

        <div className="layout-l">
          <div className="layout-content">
            <span>L</span>
          </div>
        </div>

        <div className="layout-sm">
          <div className="layout-content">
            <span>SM</span>
          </div>
        </div>

        <div className="layout-sm">
          <div className="layout-content">
            <span>SM</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
