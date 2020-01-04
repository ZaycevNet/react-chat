import { connect } from "react-redux";

import Alerter from "./alerter";

import * as actions from "../../reducers/chat/actions";

const map_state_to_props = store => ({
  state: {
    ...store
  }
});

const map_dispatch_to_props = dispatch => ({
  dispatch: {
    chat: {
      connect: state => dispatch(actions.connect(state)),
      login: state => dispatch(actions.login(state)),
      doLogin: state => dispatch(actions.doLogin(state))
    }
  }
});

export default connect(map_state_to_props, map_dispatch_to_props)(Alerter);
