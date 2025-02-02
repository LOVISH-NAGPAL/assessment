
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/slice1';

const store = configureStore({
  reducer: {
    data: dataReducer
  }
});

export default store;
