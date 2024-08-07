import { configureStore } from '@reduxjs/toolkit';
import xeMayReducer from '../Reducers/xeMayReducer'; 

const store = configureStore({
  reducer: {
    xeMay: xeMayReducer, 
  },
});

export default store;
