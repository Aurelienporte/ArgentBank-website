import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hasError: false,
  }

  export const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        hasError: (state) => {state.hasError = true},
        noError: (state) => {state.hasError = false}
    },
  })

  export const {hasError, noError} = formSlice.actions

  export default formSlice.reducer