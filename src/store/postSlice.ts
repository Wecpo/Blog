import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Post = {
  body: string;
  id: number | undefined;
  title: string;
  userId: number | undefined;
};

type PostsState = {
  posts: Post[];
};

const initialState: PostsState = { posts: [] };

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsLoaded(state, action: PayloadAction<Array<Post>>) {
      console.log(action.payload);

      state.posts = action.payload;
    },
  },
});

export const getPosts = (state: RootState) => state.posts;

export const { postsLoaded } = postSlice.actions;

export default postSlice.reducer;
