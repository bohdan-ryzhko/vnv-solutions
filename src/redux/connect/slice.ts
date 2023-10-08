import { createSlice } from "@reduxjs/toolkit";
import { createComment } from "./operations";
import { ConnectSliceType } from "../../d";

const initialState: ConnectSliceType = {
  isLoad: false,
  error: null,
  data: null,
}

const connectSlice = createSlice({
  name: "connect",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createComment.pending, (state) => {
        state.isLoad = true;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.isLoad = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(createComment.rejected, (state, action) => {
        state.isLoad = false;
        state.error = action.payload;
      })
  }
});

export const connectReducer = connectSlice.reducer;
