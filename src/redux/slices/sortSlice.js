import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortOption: "none",
  selectedOption: null,
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { setSortOption, setSelectedOption } = sortSlice.actions;

export default sortSlice.reducer;
