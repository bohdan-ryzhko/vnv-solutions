import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { ContactsValues } from "../../d";
import { toast } from "react-toastify";

export const createComment = createAsyncThunk<ContactsValues, ContactsValues>(
  "create-comment",
  async (contactsValues, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<ContactsValues> = await axios.post("comments", contactsValues);
      toast.success("Your comment send success!");
      return response.data;
    } catch (error) {
      toast.error("Oooops, error :(")
      return rejectWithValue(error);
    }
  }
);

export const getComments = createAsyncThunk<ContactsValues[]>(
  "get-comment",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<ContactsValues[]> = await axios.get("comments");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);