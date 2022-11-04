import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./api/brewery";

export const searchCity = createAsyncThunk("search/city", async (props) => {
  return await api.ByCity(props).then((data) => {
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
      .addCase(searchCity.pending, (state) => {})
      .addCase(searchCity.fulfilled, (state, action) => {
        state.list = action.payload;
      });
  },
});

export const breweryList = (state) => {
  return state.brewery.list;
};
export default brewerySlice.reducer;
