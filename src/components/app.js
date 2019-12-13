import React, { Component } from "react";
import "./app.css";
import Layout from "./layout";

class App extends Component {
  state = {
    layout: ["xl", "l", "sm", "sm"]
  };

  render() {
    return <Layout layout={this.state.layout} />;
  }
}

export default App;
