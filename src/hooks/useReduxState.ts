import { useSelector } from "react-redux";
import { AppState, selectQuestions, selectServices } from "../redux";
import { selectConnect } from "../redux/selectors";

export const useReduxState = (): AppState => ({
  services: useSelector(selectServices),
  questions: useSelector(selectQuestions),
  connect: useSelector(selectConnect),
});
