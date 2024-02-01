import { configureStore } from "@reduxjs/toolkit";
import reactionReducer from "./reactionSlice";
import postReducer from "./postSlice";

const store = configureStore({
  reducer: {
    posts: postReducer,
    reactions: reactionReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
