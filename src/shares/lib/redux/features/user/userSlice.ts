import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  userid: string | null;
  isLogin: boolean;
}

const initialState: UserState = {
  userid: null,
  isLogin: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userid = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setUser, setIsLogin } = userSlice.actions;
export default userSlice.reducer;
