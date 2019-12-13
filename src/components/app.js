import React, { Component } from "react";
import "./app.css";
import Layout from "./layout";

class App extends Component {
  state = {
    input: "XL/L/2SM",
    layout: []
  };

  componentDidMount() {
    this.parseLayout(this.state.input);
  }

  render() {
    let layout = this.state.layout;

    return <Layout layout={layout} />;
  }

  parseLayout = layoutString => {
    let layoutArray = layoutString.split("/");
    let layout = [];

    layoutArray.forEach(item => {
      let layoutNumberRegex = /^[0-9]{0,1}/g;
      let layoutNumber = item.match(layoutNumberRegex)[0] || 1;

      let layoutSizeRegex = /[A-Z]{1,2}$/g;
      let layoutSize = item.match(layoutSizeRegex)[0].toLowerCase();

      for (let i = 0; i < layoutNumber; i++) {
        layout.push(layoutSize);
      }
    });

    this.setState({ layout });
  };
}

export default App;
