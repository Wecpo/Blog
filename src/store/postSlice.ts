import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Reaction = {
  likes: { count: number; isActive: boolean };
  dislikes: { count: number; isActive: boolean };
};

export type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
  reactions: Reaction;
};

export type PostsState = {
  posts: Post[];
};

const initialState: PostsState = { posts: [] };

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    loadPosts(state, action: PayloadAction<Array<Post>>) {
      state.posts = action.payload;
    },
    addLike(state, action: PayloadAction<number>) {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload) {
          post.reactions.likes.isActive = true;
          post.reactions.likes.count++;
        }

        return post;
      });
    },
    addDislike(state, action: PayloadAction<number>) {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload) {
          post.reactions.dislikes.isActive = true;
          post.reactions.dislikes.count++;
        }
        return post;
      });
    },
    removeLike(state, action: PayloadAction<number>) {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload) {
          post.reactions.likes.isActive = false;
          post.reactions.likes.count--;
        }
        return post;
      });
    },
    removeDislike(state, action: PayloadAction<number>) {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload) {
          post.reactions.dislikes.isActive = false;
          post.reactions.dislikes.count--;
        }
        return post;
      });
    },
  },
});

export const getPosts = (state: RootState) => state.posts;

export const { loadPosts, addLike, addDislike, removeLike, removeDislike } =
  postSlice.actions;

export default postSlice.reducer;
