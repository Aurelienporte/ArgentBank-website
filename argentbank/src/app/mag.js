import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../features/user/userSlice';
import { apiSlice } from "../features/api/apiSlice";
import  formSlice  from "../features/form/formSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    form: formSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools:true,
})