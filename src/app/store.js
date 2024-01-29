import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api";
import playerSlice from "./playerSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    player: playerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
