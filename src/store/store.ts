import { configureStore } from "@reduxjs/toolkit";
import portfolioSlice from "./portfolioSlice";

const store = configureStore({
  reducer: {
    portfolio: portfolioSlice
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;