import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  categories: [],
  category: '63aed17dfe379dc26cf4e422'
}

export const fetchCategories = createAsyncThunk(
  "get/categories/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("/categories");
      const categories = await res.json();

      if (categories.error) {
        return thunkAPI.rejectWithValue(categories.error);
      }
      return thunkAPI.fulfillWithValue(categories);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const setCategory = createAsyncThunk('setCategory', ({ id }, _) => {
  return id
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setCategory.fulfilled, (state, action) => {
        state.category = action.payload;
      }
      )
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCategories.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.categories = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
