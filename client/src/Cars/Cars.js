import React, { Component } from "react";
import Car from "./Car/Car";

export const ClickedContext = React.createContext(false);

class Cars extends Component {
  state = {
    cars: [
      { name: "Ford", year: 2018 },
      { name: "Audi", year: 2016 },
      { name: "Mazda", year: 2010 },
    ],
  };

  goToHomePage = () => {
    this.props.history.push("/");
  };

  render() {
    const divStyle = {
      textAlign: "center",
    };

    let cars = null;

    cars = this.state.cars.map((car, i) => {
      return (
        <Car
          key={i}
          name={car.name}
          year={car.year}
          index={i}
          onChangeName={(event) => this.onChangeName(event.target.value, i)}
        />
      );
    });

    return (
      <div style={divStyle}>
        <button onClick={this.goToHomePage}>Click</button>
        <hr />
        <div
          style={{
            width: 400,
            margin: "auto",
            paddingTop: 20,
          }}
        >
          {cars}
        </div>
      </div>
    );
  }
}

export default Cars;
