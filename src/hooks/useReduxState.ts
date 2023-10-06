import { useSelector } from "react-redux";
import { AppState, selectServices } from "../redux";

export const useReduxState = (): AppState => ({
  services: useSelector(selectServices),
});
