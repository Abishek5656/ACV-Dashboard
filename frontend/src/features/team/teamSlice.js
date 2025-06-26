// src/features/team/teamSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTeamData } from './teamAPI';

export const getTeamData = createAsyncThunk(
  'team/fetch',
  async () =>  {
   const response = await fetchTeamData()
  return response.data;
  }
);

const teamSlice = createSlice({
  name: 'team',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTeamData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTeamData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; 
      })
      .addCase(getTeamData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default teamSlice.reducer;
