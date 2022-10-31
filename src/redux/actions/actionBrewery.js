import * as actions from "./actionTypes";

export const breweryById = (props) => ({
  type: actions.SINGLE_BREWERY_ID,
  payload: { id: props },
});

export const allBrewery = () => ({
  type: actions.ALL_BREWERY,
  payload: {},
});

export const allBreweryCity = () => ({
  type: actions.ALL_BREWERY_CITY,
  payload: {},
});

export const allBreweryDistance = () => ({
  type: actions.ALL_BREWERY_DISTANCE,
  payload: {},
});

export const allBreweryName = () => ({
  type: actions.ALL_BREWERY_NAME,
  payload: {},
});

export const allBreweryPostal = () => ({
  type: actions.ALL_BREWERY_POSTAL,
  payload: {},
});

export const allBreweryType = (props) => ({
  type: actions.ALL_BREWERY_TYPE,
  payload: { type: props },
});

export const searchBrewery = (props) => ({
  type: actions.SEARCH_BREWERY,
  payload: { query: props },
});
