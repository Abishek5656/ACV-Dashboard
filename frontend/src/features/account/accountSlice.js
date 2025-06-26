import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAccountData } from './accountTypeAPI';

export const getAccountData = createAsyncThunk('account/fetch', async () => {
  const response = await fetchAccountData();
  return response.data;
});

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAccountData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAccountData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAccountData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default accountSlice.reducer;

