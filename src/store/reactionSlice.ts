import { createSlice } from "@reduxjs/toolkit";
import { getRandomNumber } from "../utils/getRandomNumber";
import { RootState } from "../store";

type Reaction = {
  reaction: { likes: number; dislikes: number };
};

const initialState: Reaction = {
  reaction: { likes: getRandomNumber(50), dislikes: getRandomNumber(50) },
};

const reactionSlice = createSlice({
  name: "reaction",
  initialState,
  reducers: {
    addLike(state) {
      state.reaction.likes = state.reaction.likes + 1;
    },
    addDislike(state) {
      state.reaction.dislikes = state.reaction.dislikes + 1;
    },
  },
});

export const getReactions = (state: RootState) => state.reactions;

export const { addLike, addDislike } = reactionSlice.actions;

export default reactionSlice.reducer;
