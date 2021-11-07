import React, { Component } from "react";
import Cars from "./Cars/Cars";
import About from './About/About'
import classes from './App.module.css'

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


        <About />

        <Cars />

      </div>
    );
  }
}

export default App;
