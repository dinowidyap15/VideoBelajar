import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCard } from "../../services/cards.service";

export const fetchCards = createAsyncThunk("cards/fetchCards", async (_, { rejectWithValue }) => {
  try {
    const response = await getCard();
    return response;
  } catch (error) {
    return rejectWithValue(error.message || "An error occurred");
  }
});

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default cardsSlice.reducer;
