import React, { Component } from "react";
import "./app.css";
import Layout from "./layout";
import Controls from "./controls";

class App extends Component {
  state = {
    inputs: ["XL", "XL/L/L", "XL/L/2SM"],
    selected: "",
    layout: []
  };

  componentDidMount() {
    let selected = this.state.inputs[0];

    this.setState({ selected });

    this.parseLayout(selected);
  }

  render() {
    let { layout, inputs } = this.state;

    return (
      <div className="app">
        <Layout layout={layout} />

        <Controls inputs={inputs} onChangeLayout={this.handleChangeLayout} />
      </div>
    );
  }

  handleChangeLayout = event => {
    let selected = event.target.value;

    this.setState({ selected });

    this.parseLayout(selected);
  };

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
