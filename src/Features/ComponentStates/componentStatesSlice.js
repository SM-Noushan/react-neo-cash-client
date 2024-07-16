import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const componentStateSlice = createSlice({
  name: "componentStates",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar.minimized = !state.sidebar.minimized;
    },
  },
});

export default componentStateSlice.reducer;
export const { toggleSidebar } = componentStateSlice.actions;
