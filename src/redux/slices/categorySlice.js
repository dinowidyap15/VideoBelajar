import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCard, updateCard as apiUpdateCard, deleteCard as apiDeleteCard } from "../../services/cards.service";

export const fetchCards = createAsyncThunk("cards/fetchCards", async (_, { rejectWithValue }) => {
  try {
    const response = await getCard();
    return response;
  } catch (error) {
    console.error("Fetch Cards Error:", error);
    return rejectWithValue(error.response?.data || "Failed to fetch cards");
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

const categorySlice = createSlice({
  name: "category",
  initialState: {
    cards: [],
    activeCategory: "Semua Kelas",
    sortOption: "az",
    currentPage: 1,
    dropdownOpen: false,
    loading: false,
    error: null,
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    toggleDropdown: (state) => {
      state.dropdownOpen = !state.dropdownOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
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

export const { setActiveCategory, setSortOption, setCurrentPage, toggleDropdown } = categorySlice.actions;

export default categorySlice.reducer;
