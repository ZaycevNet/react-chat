import React from "react";
import "materialize-css/dist/css/materialize.css";

const stylesheets = {
  main: {
    position: "relative",
    minHeight: "80vh",
    maxWidth: "400px",
    margin: "10vh auto",
    borderRadius: "5px"
  }
};

const Container = data => {
  return (
    <div className="container white z-depth-4" style={stylesheets.main}>
      {data.children}
    </div>
  );
};

export default Container;
