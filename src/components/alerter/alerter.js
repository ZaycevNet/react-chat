import React, { Fragment } from "react";

const Alerter = data => {
  React.useEffect(() => {
    window.M.toast({ html: "Подключение к серверу..." });
    data.dispatch.chat.connect();
  }, []);

  React.useEffect(() => {
    if (data.state.chat.socket) {
      data.state.chat.socket.on("connect_error", () => {
        window.M.toast({ html: "Ошибка подключения к серверу" });
      });
      data.state.chat.socket.on("connect_timeout", () => {
        window.M.toast({ html: "Истекло время подключения" });
      });
      data.state.chat.socket.on("reconnect", () => {
        window.M.toast({ html: "Попытка подключиться" });
      });
      data.state.chat.socket.on("reconnecting", () => {
        window.M.toast({ html: "Переподключение" });
      });
      data.state.chat.socket.on("connect", () => {
        window.M.toast({ html: "Успешное подключение к серверу" });
      });
      data.state.chat.socket.on("disconnect", () => {
        window.M.toast({ html: "Отключен от сервера" });
      });

      data.state.chat.socket.on("login", (a, b, c, d) => {
        window.M.toast({ html: "Добро пожаловать!" });
        data.dispatch.chat.doLogin(a);
      });
    }
  }, [data.state.chat.socket]);

  return <Fragment />;
};

export default Alerter;
