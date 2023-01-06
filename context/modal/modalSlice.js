import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShown: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isShown = true;
    },
    hideModal: (state, action) => {
      state.isShown = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
