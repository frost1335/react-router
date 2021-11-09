import React, { Component } from "react";
import Cars from "./Cars/Cars";
import About from "./About/About";
import { Route, Routes, NavLink } from "react-router-dom";
import { CarDetail } from "./CarDetail/CarDetail";
import "./App.css";

class App extends Component {
  state = {
    isLoggedIn: false,
  };

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

        <div style={{ textAlign: "center" }}>
          <h3>Is logged in {this.state.isLoggedIn ? "TRUE" : "FALSE"}</h3>
          <button
            onClick={() =>
              this.setState({ isLoggedIn: !this.state.isLoggedIn })
            }
          >
            Login
          </button>
        </div>

        <hr />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} exact />

          {this.state.isLoggedIn ? (
            <Route path="/about" element={<About />} />
          ) : null}

          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:name" element={<CarDetail />} />
          <Route
            path="*"
            element={
              <h1 style={{ color: "red", textAlign: "center" }}>
                404 not found
              </h1>
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
