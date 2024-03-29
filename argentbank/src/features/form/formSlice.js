import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hasError: "",
  }

  export const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        hasError: (state, action) => {state.hasError = action.payload},
        noError: (state) => {state.hasError = false}
    },
  })

  export const {hasError, noError} = formSlice.actions

  export default formSlice.reducer