import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/movieSlics";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
