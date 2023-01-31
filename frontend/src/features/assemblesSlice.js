import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    loading: false,
    error: null,
    assembles: [],
};


export const fetchAssembles = createAsyncThunk(
    "get/assembles",
    async (data, thunkAPI) => {
        try {
            const res = await fetch("/assembly/");
            const assembles = await res.json();
            if (assembles.error) {
                return thunkAPI.rejectWithValue(assembles.error);
            }
            return thunkAPI.fulfillWithValue(assembles);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);


export const assemblesSlice = createSlice({
    name: "assembles",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAssembles.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(fetchAssembles.pending, (state, action) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchAssembles.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.assembles = action.payload;
        });
    },
  });

  
export default assemblesSlice.reducer;
