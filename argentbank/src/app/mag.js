import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../features/user/userSlice';
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools:true,
})