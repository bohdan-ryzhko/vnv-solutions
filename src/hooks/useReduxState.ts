import { useSelector } from "react-redux";
import { AppState, selectQuestions, selectServices } from "../redux";

export const useReduxState = (): AppState => ({
  services: useSelector(selectServices),
  questions: useSelector(selectQuestions),
});
