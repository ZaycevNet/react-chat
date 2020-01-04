import * as types from "./actionTypes";

import io from "socket.io-client";

const initialState = {
  socket: undefined,
  user: undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.connect:
      return {
        ...state,
        socket: io("//localhost:3001")
      };
    case types.login:
      state.socket.emit("login", action.payload);
      return {
        ...state
      };
    case types.doLogin:
      return {
        ...state,
        user: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
