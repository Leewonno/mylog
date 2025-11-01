import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  isNameChange: boolean;
  email: string;
  isLogin: boolean;
}

const initialState: UserState = {
  name: "",
  isNameChange: false,
  email: "",
  isLogin: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setIsNameChange: (state, action) => {
      state.isNameChange = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setName, setIsNameChange, setEmail, setIsLogin } = userSlice.actions;
export default userSlice.reducer;
