import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import configuresSlice from "./configuresSlice";
const initialState = {
  loading: false,
  error: false,
  successfully: null,
  users: [],
  cart: [],
  token: localStorage.getItem("token"),
  id: localStorage.getItem("id"),
};

export const authSignIn = createAsyncThunk(
  "auth/signIn",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ login, password }),
      });
      const user = await res.json();

      if (user.error) {
        return thunkAPI.rejectWithValue(user.error);
      }
      localStorage.setItem("token", user.token);
      localStorage.setItem("id", user.id);
      return thunkAPI.fulfillWithValue(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const authSignUp = createAsyncThunk(
  "auth/signUp",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("/registration", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ login, password }),
      });
      const user = await res.json();

      if (user.error) {
        return thunkAPI.rejectWithValue(user.error);
      }
      return thunkAPI.fulfillWithValue(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchCart = createAsyncThunk(
  "fetch/cart",
  async ({ userId }, thunkAPI) => {
    try {
      const res = await fetch(`/cart/${userId}`, {
        headers: { "Content-Type": "application/json" },
      });
      const user = await res.json();
      if (user.error) {
        return thunkAPI.rejectWithValue(user.error.message);
      }
      return thunkAPI.fulfillWithValue(user);
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addAssemblytoCart = createAsyncThunk(
  "addAssemblytoCart",
  async ({ userId, assemblyId }, thunkAPI) => {
    try {
      const res = await fetch(`/addtoCart/${userId}/${assemblyId}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().users.token}`,
        },
      });
      const user = await res.json();
      if (user.error) {
        return thunkAPI.rejectWithValue(user.error);
      }
      return thunkAPI.fulfillWithValue(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchUser = createAsyncThunk("fetch/user", async (_, thunkAPI) => {
  try {
    const res = await fetch(`/users`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().users.token}`,
      },
    });
    const users = await res.json();
    if (users.error) {
      return thunkAPI.rejectWithValue(users.error);
    }
    return thunkAPI.fulfillWithValue(users);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const deleteAssemblyfromCart = createAsyncThunk(
  "cart/delete",
  async ({ userId, assemblyId }, thunkAPI) => {
    try {
      const res = await fetch(`/delete/cart/${userId}/${assemblyId}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
           Authorization: `Bearer ${thunkAPI.getState().users.token}`
           },
      });
      const user = await res.json();
      if(user.error) {
      return thunkAPI.rejectWithValue(user.error);
      }
      return thunkAPI.fulfillWithValue(user)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(authSignIn.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(authSignIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
      })

      // REGISTER
      .addCase(authSignUp.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.successfully = null;
      })
      .addCase(authSignUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.successfully = null;
      })
      .addCase(authSignUp.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.successfully = action.payload;
      })

      //FETCH CART
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.cart = action.payload.cart;
      })
      //ADD TO CART
      .addCase(addAssemblytoCart.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addAssemblytoCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addAssemblytoCart.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
      })
      //FETCH USERS
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        action.payload.map((item) => {
          if (item._id === localStorage.getItem("id")) {
            state.users = item;
          }
          return state.users;
        });
      })
      //DELETE ASSEMBLY FROM CART
      .addCase(deleteAssemblyfromCart.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(deleteAssemblyfromCart.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(deleteAssemblyfromCart.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
  },
});

export default usersSlice.reducer;
