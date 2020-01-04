import React from "react";
import "materialize-css/dist/css/materialize.css";

const stylesheets = {
  main: {
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    height: "80vh",
    padding: "30px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    paddingBottom: "100px"
  }
};

const Login = data => {
  const [login, setLogin] = React.useState("");

  const onSubmit = event => {
    event.preventDefault();

    data.dispatch.chat.login(login);
  };

  return (
    <div style={stylesheets.main}>
      <div>
        <h5 style={stylesheets.title}>Авторизация</h5>
        <form className="row" onSubmit={onSubmit}>
          <div className="input-field col s12">
            <input
              id="login"
              type="text"
              onChange={event => setLogin(event.target.value)}
            />
            <label htmlFor="login">Желаемое имя</label>
          </div>
          <div className="col s12">
            <button
              className="btn waves-effect waves-light progress"
              type="submit"
              name="action"
            >
              Продолжить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
