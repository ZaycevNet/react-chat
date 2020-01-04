import { connect } from "react-redux";

import * as actions from "../../reducers/chat/actions";

import Login from "./login";

const map_state_to_props = store => ({
  state: {
    ...store
  }
});

const map_dispatch_to_props = dispatch => ({
  dispatch: {
    chat: {
      login: state => dispatch(actions.login(state))
    }
  }
});

export default connect(map_state_to_props, map_dispatch_to_props)(Login);
