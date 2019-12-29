import React from "react";
import { connect } from "react-redux";

import Navbar from "./navbar";

import { __ } from "../../reducers/navbar/actions";

const map_state_to_props = state => ({ store: { ...state } });

const map_dispatch_to_props = dispatch => ({
  dispatch: {
    navbar: {
      __: state => dispatch(__(state))
    }
  }
});

export default connect(map_state_to_props, map_dispatch_to_props)(Navbar);
