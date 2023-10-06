import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { Service, ServicesSliceType } from "../../d";

export const pendingServices: CaseReducer<ServicesSliceType> = (state) => {
  state.isLoad = true;
};

export const fulfilledServices: CaseReducer<ServicesSliceType, PayloadAction<Service[]>> = (state, action) => {
  state.isLoad = false;
  state.error = null;
  state.services = action.payload;
};

export const rejectedServices: CaseReducer<ServicesSliceType, PayloadAction<unknown>> = (state, action) => {
  state.isLoad = false;
  state.error = action.payload;
};
