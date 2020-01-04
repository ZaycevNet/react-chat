import React, { Fragment } from "react";
import { connect } from "react-redux";

// alerter
import Alerter from "./components/alerter/alerterConnect";

// bg
import BG from "./components/background/background";
// container
import Container from "./components/container/container";

//login form
import Login from "./components/login/loginConnect";
import MessageContainer from "./components/messagecontainer/messagecontainer";

function App(data) {
  return (
    <Fragment>
      <Alerter />
      <BG />
      <Container>
        {data.state.chat.user ? <MessageContainer /> : <Login />}
      </Container>
    </Fragment>
  );
}

const map_state_to_props = store => ({
  state: {
    ...store
  }
});

export default connect(map_state_to_props)(App);
