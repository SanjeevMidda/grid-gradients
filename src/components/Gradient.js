import React from "react";

const Gradient = () => {
  let colors = [
    "green",
    "blue",
    "red",
    "green",
    "black",
    "white",
    "silver",
    "orange",
    "purple",
    "pink",
  ];

  let randomColorNumber = Math.floor(Math.random() * colors.length);

  let colorSelected = {
    colorOne: colors[randomColorNumber],
    colorTwo: colors[randomColorNumber],
  };

  let styles = {
    background: `linear-gradient(${colorSelected.colorOne}, ${colorSelected.colorTwo})`,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  };

  return <div style={styles}></div>;
};

export default Gradient;
