import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../features/player";

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});
