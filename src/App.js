import React, { Component } from "react";
import ColorList from "./components/colorList";
import colors from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: colors };
    this.rateColor = this.rateColor.bind(this);
  }
  render() {
    const { items } = this.state;
    return (
      <div className="app">
        <ColorList colors={items} onRate={this.rateColor} />
      </div>
    );
  }

  rateColor(id, rating) {
    const colors = this.state.items.map(color =>
      color.id !== id
        ? color
        : {
            ...color,
            rating
          }
    );
    this.setState({ items: colors });
  }
}

export default App;
