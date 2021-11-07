import React, { Component } from "react";
import "./Car.css";
import PropTypes from "prop-types";

class Car extends Component {
  render() {
    return (
      <div className="Car">
        <h3> Car name: {this.props.name} </h3>{" "}
        <p>
          Year: <strong> {this.props.year} </strong>{" "}
        </p>{" "}
      </div>
    );
  }
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  index: PropTypes.number,
};

export default Car;
