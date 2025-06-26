// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import customerTypeReducer from '../features/customerType/customerTypeSlice';
import teamReducer from '../features/team/teamSlice';
import acvReducer from '../features/acv/acvTypeSlice';
import accountReducer from '../features/account/accountSlice';

export const store = configureStore({
  reducer: {
    customerType: customerTypeReducer,
    team: teamReducer,
    acv: acvReducer,
    account: accountReducer
  }
});
