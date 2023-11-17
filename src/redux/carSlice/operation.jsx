import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const AXIOS_BASE_URL = 'https://644949c5e7eb3378ca4532e7.mockapi.io/';
axios.defaults.baseURL = AXIOS_BASE_URL;

export const fetchCars = createAsyncThunk(
  'cars/getCars',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`cars`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
