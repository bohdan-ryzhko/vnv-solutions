import { AppState } from "./index";

export const selectServices = (state: AppState) => state.services;

export const selectQuestions = (state: AppState) => state.questions;
