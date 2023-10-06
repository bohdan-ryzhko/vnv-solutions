import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction';
import { createSlice } from "@reduxjs/toolkit";
import { ServicesSliceType } from "../../d";
import { fetchServices } from "./index";
import { fulfilledServices, pendingServices, rejectedServices } from "./handlers";

const initialState: ServicesSliceType = {
  services: [],
  currentPage: 0,
  isLoad: false,
  error: null,
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, pendingServices)
      .addCase(fetchServices.fulfilled, fulfilledServices)
      .addCase(fetchServices.rejected, rejectedServices)
  }
});

export const { setCurrentPage } = servicesSlice.actions;
export const servicesReducer = servicesSlice.reducer;
