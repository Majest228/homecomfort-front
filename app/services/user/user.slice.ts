import { createSlice } from '@reduxjs/toolkit';
import { login, register } from './user.actions';


const initialState = {
  user: typeof window !== 'undefined' ? localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null : null, isLoading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true
    })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false
        state.user = null
      }).addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
  }
})


