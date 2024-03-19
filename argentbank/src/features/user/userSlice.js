import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName: "",
    userName: "",
    isConnected:false,
    token:"",
  }
  
  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      firstName: (state, action) => {
        state.firstName = action.payload
      },
      lastName: (state, action) => {
        state.lastName = action.payload
      },
      userName: (state, action) => {
        state.userName = action.payload
        console.log("username mis à jour")
      },
      logIn: (state) => {
        state.isConnected = true
      },
      logOut: () => {
         return {...initialState}
      },
      setToken: (state, action) => {
        state.token = action.payload
      }
    },
  })
  
  export const { firstName, lastName, userName, logIn, logOut, setToken } = userSlice.actions
  
  export default userSlice.reducer