import React from "react";

const srcs = [
  "https://c.wallhere.com/photos/7e/d5/lake_water_blue_protected_stony_fir_trees_sky_gloomy-1052327.jpg!d"
];

const Background = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#f5f5f5",
        zIndex: -1
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          backgroundImage: "url(" + srcs[0] + ")",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      ></div>
    </div>
  );
};

export default Background;
