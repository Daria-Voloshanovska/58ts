
import { createSlice } from '@reduxjs/toolkit';
import type { IAuthState, IUser } from './types';
import { loginAction, loginToken } from './authAction';

const initialUser: IUser = {
    id: 0,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    image: '',
    accessToken: '',
    refreshToken: ''
}

const initialState: IAuthState = {
  user: initialUser,
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    // создаем синхронный action
    logoutUser: (state) => {
       // затираем юзера данными из начального состояния
   state.user = initialUser
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload;
         // убираем ошибку, если данные пришли
        state.error = '';
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.isLoading = false
        state.user = initialUser
        state.error = action.payload as string
      })

      .addCase(loginToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginToken.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload;
      })
      .addCase(loginToken.rejected, (state, action) => {
        state.isLoading = false
        state.user = initialUser
        state.error = action.payload as string
      })
  },
});

export default authSlice;

//! важно не забыть экспортировать синхронный action
export const { logoutUser} = authSlice.actions