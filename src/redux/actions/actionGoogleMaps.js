import * as actions from "./actionTypes";

export const mapBrewery = (props) => ({
  type: actions.MAP_BREWERY,
  payload: { brewery: props },
});
