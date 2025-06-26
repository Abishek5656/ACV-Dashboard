// src/features/customerType/customerTypeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCustomerTypeData } from './customerTypeAPI';

export const getCustomerTypeData = createAsyncThunk(
  'customerType/fetch',
  async () => {
    const response = await fetchCustomerTypeData();
    return response.data; // response.data matches ApiResponse<T> data field
  }
);

const customerTypeSlice = createSlice({
  name: 'customerType',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  extraReducers: builder => {
    builder
      .addCase(getCustomerTypeData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCustomerTypeData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getCustomerTypeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default customerTypeSlice.reducer;
