import React from "react";
import { NavLink } from "react-router-dom";

const Dialog = data => {
  return (
    <NavLink
      to={data.chat.link}
      className="collection-item"
      activeStyle={{
        backgroundColor: "#e8e8e8"
      }}
      style={{
        borderBottom: "1px solid #ececec"
      }}
    >
      <span className="title black-text">{data.chat.from}</span>
      <p className="grey-text">{data.chat.message}</p>
    </NavLink>
  );
};

export default Dialog;
