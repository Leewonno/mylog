import { createSlice } from '@reduxjs/toolkit';

interface SiteState {
  siteName: string;
  isSiteNameChange: boolean;
}

const initialState: SiteState = {
  siteName: "",
  isSiteNameChange: false,
};

export const siteSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {
    setSiteName: (state, action) => {
      state.siteName = action.payload;
    },
    setIsSiteNameChange: (state, action) => {
      state.isSiteNameChange = action.payload;
    },
  },
});

export const { setSiteName, setIsSiteNameChange } = siteSlice.actions;
export default siteSlice.reducer;
