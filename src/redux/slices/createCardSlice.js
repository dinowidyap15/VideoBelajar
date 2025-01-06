import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addCard as apiAddCard, updateCard as apiUpdateCard, deleteCard as apiDeleteCard } from "../../services/cards.service";

export const addCard = createAsyncThunk("cards/addCard", async (cardData, { rejectWithValue }) => {
  try {
    const response = await apiAddCard(cardData);
    return response;
  } catch (error) {
    console.error("Add Card Error:", error);
    return rejectWithValue(error.response?.data || "Failed to add card");
  }
});

export const updateCard = createAsyncThunk("cards/updateCard", async (cardData, { rejectWithValue }) => {
  try {
    const { id, ...updatedCard } = cardData;
    const response = await apiUpdateCard(id, updatedCard);
    return response;
  } catch (error) {
    console.error("Update Card Error:", error);
    return rejectWithValue(error.response?.data || "Failed to update card");
  }
});

export const deleteCard = createAsyncThunk("cards/deleteCard", async (id, { rejectWithValue }) => {
  try {
    await apiDeleteCard(id);
    return id;
  } catch (error) {
    console.error("Delete Card Error:", error);
    return rejectWithValue(error.response?.data || "Failed to delete card");
  }
});

const createCardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.loading = false;
        state.cards.push(action.payload);
      })
      .addCase(addCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateCard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCard.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.cards.findIndex((card) => card.id === action.payload.id);
        if (index !== -1) {
          state.cards[index] = action.payload;
        }
      })
      .addCase(updateCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteCard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = state.cards.filter((card) => card.id !== action.payload);
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = createCardSlice.actions;

export default createCardSlice.reducer;
