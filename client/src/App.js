import React, { Component } from "react";
import Cars from "./Cars/Cars";
import About from "./About/About";
import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to={{ pathname: "/cars" }}>Cars</NavLink>
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
