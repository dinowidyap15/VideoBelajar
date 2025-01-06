import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDetailProduct } from "../../services/cards.service";

export const fetchProductDetail = createAsyncThunk("detail/fetchProductDetail", async (id, { rejectWithValue }) => {
  try {
    const response = await getDetailProduct(id);
    return response;
  } catch (error) {
    console.error("Fetch Product Detail Error:", error);
    return rejectWithValue(error.response?.data || "Failed to fetch product detail");
  }
});

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    product: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default detailSlice.reducer;
