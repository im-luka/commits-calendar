import { configureStore } from "@reduxjs/toolkit";
import commitsSlice from "./commits/commitsSlice";
import modalSlice from "./modal/modalSlice";

const store = configureStore({
  reducer: {
    commits: commitsSlice,
    modal: modalSlice,
  },
});

export default store;
