import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./api/brewery";

export const searchCity = createAsyncThunk("search/city", async (props) => {
  console.log("Hit function");
  return await api.ByCity(props).then((data) => {
    console.log(data);
    return data;
  });
});

const initialState = {
  list: [],
};

const brewerySlice = createSlice({
  name: "brewery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchCity.pending, (state) => {
        console.log("Search By City Started");
      })
      .addCase(searchCity.fulfilled, (state, action) => {
        state.list = action.payload;
        console.log("Search By City Ended");
      });
  },
});

// export const { fake } = brewerySlice.actions;
export const breweryList = (state) => {
  console.log(state);
  return state.brewery.list;
};
export default brewerySlice.reducer;
