import React, { Component } from "react";
import Cars from "./Cars/Cars";
import About from "./About/About";
import { Route, Routes, Link } from "react-router-dom";
import classes from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className={classes.navbar}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
          </ul>
        </nav>

        <hr />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} exact />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </div>
    );
  }
}

export default App;
