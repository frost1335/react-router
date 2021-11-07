import React from "react";
import classes from './About.module.css'

const About = (props) => {
  console.log(props);
  return (
    <div className={classes.About}>
      <h1>About page</h1>
    </div>
  );
};

export default About;
