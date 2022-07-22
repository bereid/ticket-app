import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type User = {
  name: string,
  email: string,
};

const INITIAL_USER = {
  name: '',
  email: '',
};

export const user = createSlice({
  name: 'user',
  initialState: INITIAL_USER,
  reducers: {
    updateName: (state, action: PayloadAction) => {

    },
    updateEmail: (state, action: PayloadAction) => {
      
    },
    clear: (state) => {
      
    },
  },
});

export const { updateName, updateEmail, clear } = user.actions;

export const userState  = (state: RootState) => state.user;

export default user.reducer;