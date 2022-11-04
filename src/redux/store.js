import { configureStore } from "@reduxjs/toolkit";
import breweryReducer from "./sliceBrewery";

const store = configureStore({
  reducer: { brewery: breweryReducer },
});

export default store;
