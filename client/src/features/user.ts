import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type User = {
  name: string;
  email: string;
};

const INITIAL_USER = {
  name: "",
  email: "",
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
  },
});

export const { updateName, updateEmail } = user.actions;

export const userState = (state: RootState) => state.user;

export default user.reducer;
