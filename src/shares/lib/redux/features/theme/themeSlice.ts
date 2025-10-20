import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  name: string | null;
  theme: 'dark' | 'light'
}

const initialState: ThemeState = {
  name: null,
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    }
  },
});

export const { setName, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
