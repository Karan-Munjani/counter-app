import React, { Component } from "react";
import Nav from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <main className="container">
          <Counters />
        </main>
      </>
    );
  }
}

export default App;
