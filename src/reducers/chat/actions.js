import * as types from "./actionTypes";

export const connect = payload => {
  return {
    type: types.connect,
    payload
  };
};

export const login = payload => ({
  type: types.login,
  payload
});

export const doLogin = payload => ({
  type: types.doLogin,
  payload: payload ? JSON.parse(payload) : undefined
});
