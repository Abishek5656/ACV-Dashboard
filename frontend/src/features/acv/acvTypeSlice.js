import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCustomerACV } from './acvTypeAPI';

export const getCustomerACV = createAsyncThunk(
  'acv/fetch',
  async () => {
    const response = await fetchCustomerACV();
    return response.data; 
  }

);

const acvSlice = createSlice({
  name: 'acv',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCustomerACV.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCustomerACV.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getCustomerACV.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default acvSlice.reducer;
