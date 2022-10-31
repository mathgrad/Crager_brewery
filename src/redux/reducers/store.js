import { configureStore } from "@reduxjs/toolkit";
import reducerBrewery from "./reducerBrewery";
import reducerGoogleMaps from "./reducerGoogleMaps";

const store = configureStore({
  reducer: {
    brewery: reducerBrewery,
    googleMaps: reducerGoogleMaps,
  },
});

export default store;
