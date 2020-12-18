import React, { Component } from "react";
import Nav from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    // delete Whole item from array so use filter method
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const cntrs = [...this.state.counters]; //copying counters array
    const index = cntrs.indexOf(counter);
    cntrs[index] = { ...counter }; //copied counter item passed in function
    cntrs[index].value++;
    // console.log(this.state.counters[0]);

    this.setState({ counters: cntrs });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    if (counters[index].value < 0) {
      counters[index].value = 0;
    }
    // console.log(this.state.counters[0]);

    this.setState({ counters: counters });
  };

  render() {
    return (
      <>
        <Nav
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </>
    );
  }
}

export default App;
