/* eslint-disable quotes */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "not-authenticated",
  token: null,
  email: null,
  displayName: null,
  errorMessage: null,
};
export const persistLocalStorageState = ( authInfo ) => {
	localStorage.setItem('auth',JSON.stringify(authInfo))
}

const authSlice = createSlice({
  name: "auth",
  initialState  : localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : initialState,
  reducers: {
    login: (state, action) => {
      state.status = "authenticated";
      state.token = action.payload.token ?? "";
      state.email = action.payload.email;
      state.displayName = action.payload.displayName ?? "";
      state.errorMessage = null;
      persistLocalStorageState(state)
    },

    logout: (state, action) => {
      state.status = "not-authenticated";
      state.token =  null
      state.email =  null
      state.displayName =  null
      state.errorMessage  =  null
      localStorage.removeItem('auth')
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
