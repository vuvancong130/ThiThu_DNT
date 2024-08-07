import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://66645c47932baf9032aad2c4.mockapi.io/xemay';

export const fetchXeMay = createAsyncThunk('xeMay/fetchXeMay', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addXeMay = createAsyncThunk('xeMay/addXeMay', async newXeMay => {
  const response = await axios.post(API_URL, newXeMay);
  return response.data;
});

export const updateXeMay = createAsyncThunk(
  'xeMay/updateXeMay',
  async updatedXeMay => {
    const response = await axios.put(
      `${API_URL}/${updatedXeMay.id}`,
      updatedXeMay,
    );
    return response.data;
  },
);

export const deleteXeMay = createAsyncThunk('xeMay/deleteXeMay', async id => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const xeMaySlice = createSlice({
  name: 'xeMay',
  initialState: {
    xeMayList: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchXeMay.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchXeMay.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.xeMayList = action.payload;
      })
      .addCase(fetchXeMay.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addXeMay.fulfilled, (state, action) => {
        state.xeMayList.push(action.payload);
      })
      .addCase(updateXeMay.fulfilled, (state, action) => {
        const index = state.xeMayList.findIndex(
          xeMay => xeMay.id === action.payload.id,
        );
        if (index !== -1) {
          state.xeMayList[index] = action.payload;
        }
      })
      .addCase(deleteXeMay.fulfilled, (state, action) => {
        state.xeMayList = state.xeMayList.filter(
          xeMay => xeMay.id !== action.payload,
        );
      });
  },
});

export default xeMaySlice.reducer;
