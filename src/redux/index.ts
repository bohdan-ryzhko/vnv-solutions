import { createComment } from './connect/operations';
import { selectQuestions, selectServices } from './selectors';
import { store } from "./store";

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {
  store,
  selectServices,
  selectQuestions,
  createComment,
};
