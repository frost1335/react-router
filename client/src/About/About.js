import React from "react";
import classes from "./About.module.css";
import { useNavigate } from "react-router";

const About = (props) => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className={classes.About}>
      <h1>About page</h1>
      <button onClick={goToHome}>Click</button>
    </div>
  );
};

export default About;
