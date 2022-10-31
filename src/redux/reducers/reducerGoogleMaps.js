import * as actions from "../actions/actionTypes";
import initState from "./state";

const reducerGoogleMaps = (state = initState, action) => {
  switch (action.type) {
    case actions.MAP_BREWERY: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducerGoogleMaps;
