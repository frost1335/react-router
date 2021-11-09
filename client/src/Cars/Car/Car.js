import React from "react";
import "./Car.css";
import { useNavigate } from "react-router";

const Car = (props) => {
  const navigate = useNavigate();

  return (
    <div className="Car" onClick={() => navigate(`/cars/${props.name}`)}>
      <h3> Car name: {props.name} </h3>
      <p>
        Year: <strong> {props.year} </strong>
      </p>
    </div>
  );
}; 

export default Car;
