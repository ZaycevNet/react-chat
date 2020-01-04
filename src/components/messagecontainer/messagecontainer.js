import React, { Fragment } from "react";

const list = [];

const stylesheets = {
  wrapper: {
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    height: "calc(80vh - 100px)",
    overflow: "hidden",
    overflowY: "auto"
  },
  scroller: {
    width: "100%",
    height: "1000px"
  }
};

const MessageContainer = data => {
  return (
    <Fragment>
      <div style={stylesheets.wrapper}>
        <div style={stylesheets.scroller}></div>
      </div>
    </Fragment>
  );
};

export default MessageContainer;
