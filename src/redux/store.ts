import axios from 'axios';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { servicesReducer } from "./services/slice";
import { questionsReducer } from './questions/slice';
import { connectReducer } from './connect/slice';

axios.defaults.baseURL = "https://65207dc6906e276284c47e73.mockapi.io/";

const reducer = combineReducers({
  services: servicesReducer,
  questions: questionsReducer,
  connect: connectReducer,
});

export const store = configureStore({
	reducer,
});
