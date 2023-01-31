import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    configures: [],
    configure: localStorage.getItem('configure'),
    configureObj: localStorage.getItem('configureObj'),
    configureObj2: {}
}
export const addConfigure = createAsyncThunk('add/configure', async (data, thunkAPI) => {
    try {
        const res = await fetch("/configure", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const configure = await res.json()
        localStorage.setItem('configure', configure._id)
        thunkAPI.fulfillWithValue(configure)
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
}
)
export const editConfigure = createAsyncThunk('edit/configure', async ({ key, value, cost, id }, thunkAPI) => {
    try {
        const res = await fetch(`/configure/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ key, value, cost })
        })
        const configure = await res.json()
        localStorage.setItem('configureObj', configure)
        return configure
    } catch (error) {
        thunkAPI.rejectWithValue(error)
    }
})
export const getConfigures = createAsyncThunk('get/congigures', async (_, thunkAPI) => {
    try {
        const res = await fetch('/configure')
        const configure = await res.json()
        return thunkAPI.fulfillWithValue(configure) 
    } catch (error) {
        thunkAPI.rejectWithValue(error)
    }
})
export const configuresSlice = createSlice({
    name: "configures",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(editConfigure.fulfilled, (state, action) => {
                state.configureObj2 = action.payload;
            })
            .addCase(getConfigures.fulfilled, (state, action) => {
                state.configures = action.payload
            })
    },
});

export default configuresSlice.reducer;
