import React from "react";
import { connect } from "react-redux";

import Page from "./page";

const map_state_to_props = state => ({ state: { ...state } });

const map_dispatch_to_props = dispatch => ({
  /* dispatches */
});

export default connect(map_state_to_props, null)(Page);
