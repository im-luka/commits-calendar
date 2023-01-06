import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  commits: [],
};

const commitsSlice = createSlice({
  name: "commits",
  initialState,
  reducers: {
    getAllCommits: (state, action) => {
      state.commits = [...action.payload.commits];
    },
    addNewCommit: (state, action) => {
      state.commits = [...state.commits, action.payload.commit];
    },
  },
});

export const { getAllCommits, addNewCommit } = commitsSlice.actions;

export default commitsSlice.reducer;
