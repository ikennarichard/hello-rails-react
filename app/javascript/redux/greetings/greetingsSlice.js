import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const greetingsSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = greetingsSlice.actions

export default greetingsSlice.reducer