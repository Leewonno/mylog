import { createSlice } from '@reduxjs/toolkit';

interface HomeState {
  boardListData: BoardListType[];
  searchListData: BoardListType[];
}

const initialState: HomeState = {
  boardListData: [],
  searchListData: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setBoardListData: (state, action) => {
      state.boardListData = action.payload;
    },
    setSearchListData: (state, action) => {
      state.searchListData = action.payload;
    },
  },
});

export const { setBoardListData, setSearchListData } = homeSlice.actions;
export default homeSlice.reducer;
