import { __ } from "./ns";
const initialState = {
  its: "navbar"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case __:
      return { ...state };
  }

  return { ...state };
};

export default reducer;
