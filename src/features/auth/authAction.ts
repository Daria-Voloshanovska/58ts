
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginAction = createAsyncThunk(
  'authAction',
  async (userData:{username:string,password:string}, thunkAPI) => {
    try {
// делаем post запрос с данными в объекте через axios
      const response = await axios.post('https://dummyjson.com/auth/login', userData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
