import { createAsyncThunk } from "@reduxjs/toolkit";
import { Service } from "../../d";
import axios, { AxiosResponse } from "axios";

export const fetchServices = createAsyncThunk<Service[]>(
  "fetch-services",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<Service[]> = await axios.get("services");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
