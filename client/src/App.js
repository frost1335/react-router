import React, { Component } from "react";
import Cars from "./Cars/Cars";
import About from "./About/About";
import { Route, Routes } from "react-router-dom";
import classes from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className={classes.navbar}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>

        <hr />
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>

        <Cars />
      </div>
    );
  }
}

export default App;
