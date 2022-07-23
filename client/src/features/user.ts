import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type User = {
  name: string;
  email: string;
  printedAll: boolean;
  sentAll: boolean;
};

const INITIAL_USER = {
  name: "",
  email: "",
  printedAll: false,
  sentAll: false,
};

export const user = createSlice({
  name: "user",
  initialState: INITIAL_USER,
  reducers: {
    updateName: (state, action: PayloadAction<{ name: string }>) => {
      state.name = action.payload.name;
    },
    updateEmail: (state, action: PayloadAction<{ email: string }>) => {
      state.email = action.payload.email;
    },
    setSentAll: (state) => {
      state.sentAll = true;
    },
    setPrintedAll: (state) => {
      state.printedAll = true;
    },
    clearUser: (state) => {
      state.email = "";
      state.name = "";
      state.printedAll = false;
      state.sentAll = false;
    },
  },
});

export const { updateName, updateEmail, setSentAll, setPrintedAll, clearUser } =
  user.actions;

export const userState = (state: RootState) => state.user;

export default user.reducer;
