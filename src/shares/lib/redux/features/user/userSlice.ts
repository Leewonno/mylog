import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  email: string;
  github: string;
  portfolio: string;
  isNameChange: boolean;
  isEmailChange: boolean;
  isGithubChange: boolean;
  isPortfolioChange: boolean;
  isLogin: boolean;
}

const initialState: UserState = {
  name: "",
  email: "",
  github: "",
  portfolio: "",
  isNameChange: false,
  isEmailChange: false,
  isGithubChange: false,
  isPortfolioChange: false,
  isLogin: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setGithub: (state, action) => {
      state.github = action.payload;
    },
    setPortfolio: (state, action) => {
      state.portfolio = action.payload;
    },
    setIsNameChange: (state, action) => {
      state.isNameChange = action.payload;
    },
    setIsEmailChange: (state, action) => {
      state.isEmailChange = action.payload;
    },
    setIsGithubChange: (state, action) => {
      state.isGithubChange = action.payload;
    },
    setIsPortfolioChange: (state, action) => {
      state.isPortfolioChange = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const {
  setName, setEmail, setGithub, setPortfolio,
  setIsNameChange, setIsEmailChange, setIsGithubChange, setIsPortfolioChange,
  setIsLogin
} = userSlice.actions;
export default userSlice.reducer;
