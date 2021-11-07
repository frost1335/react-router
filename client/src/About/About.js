import React from "react";
import classes from "./About.module.css";
import { useHistory } from "react-router";

const About = (props) => {
  const history = useHistory();

  console.log(history);
  return (
    <div className={classes.About}>
      <h1>About page</h1>
    </div>
  );
};

export default About;
