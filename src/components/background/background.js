import React from "react";

import asset_bg from "./assets/img/email-pattern.webp";

const stylesheets = {
  main: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${asset_bg})`,
    backgroundPosition: "center"
  }
};

const Background = data => {
  return <div style={stylesheets.main}></div>;
};

export default Background;
