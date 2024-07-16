import { configureStore } from "@reduxjs/toolkit";
import componentStatesReducer from "../Features/ComponentStates/componentStatesSlice";

const store = configureStore({
  reducer: {
    componentStates: componentStatesReducer,
  },
});

export default store;
