import React from "react";

import Dialog from "../../dialog/dialog";

const chats = [
  {
    link: "/chat/rgfghfg",
    from: "chat",
    message: "message"
  }
];

const Layout = data => {
  return (
    <div
      className="container row white"
      style={{
        height: "calc(100vh - 64px - 40px)",
        margin: "20px auto"
      }}
    >
      <div
        className="col s4"
        style={{
          height: "100%",
          padding: 0,
          overflow: "hidden",
          overflowY: "auto",
          borderRight: "1px solid #ececec"
        }}
      >
        <ul className="collection" style={{ margin: 0, border: "none" }}>
          {chats.map((chat, item) => (
            <Dialog chat={chat} key={item} />
          ))}
        </ul>
      </div>
      {data.children}
    </div>
  );
};

export default Layout;
