// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import stringReducer from './slices/stringSlice';

// Import your reducers here, if you have any
// import myReducer from './myReducer';

const store = configureStore({
  reducer: {
        string: stringReducer
  },
});

export default store;
