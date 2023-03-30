import { createSlice } from "@reduxjs/toolkit"

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
  },
  reducers: {
    toggleBasket(state, action) {
      let checked = false

      state.basket.forEach((item: any) => {
        if (item.id == action.payload.id) checked = true
      })
      if (checked) {
        const newState = state.basket.filter(
          (item: any) => item.id !== action.payload.id
        )
        state.basket = newState
      } else {
        state.basket.push(action.payload)
      }
    },
    changeCount(state, action) {
      state.basket.map((item) =>
        item.id == action.payload.id
          ? (item.count = action.payload.value)
          : item
      )
    },
    plusCount(state, action) {
      state.basket.map((item) =>
        item.id == action.payload.id
          ? item.count <= 100
            ? (item.count = item.count + 1)
            : item
          : item
      )
    },
    minusCount(state) {
      state.basket.map((item) =>
        item.id == action.payload.id
          ? item.count >= 0
            ? (item.count = item.count - 1)
            : item
          : item
      )
    },
  },
})

export const { toggleBasket, changeCount, plusCount, minusCount } =
  basketSlice.actions

export default basketSlice.reducer
