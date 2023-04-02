import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: Cookies.get("basket") ? JSON.parse(Cookies.get("basket")) : [],
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
      Cookies.set("basket", JSON.stringify(state.basket))
    },
    changeCount(state, action) {
      state.basket.map((item) =>
        item.id == action.payload.id
          ? (item.count = action.payload.value)
          : item
      )
      Cookies.set("basket", JSON.stringify(state.basket))
    },
    plusCount(state, action) {
      state.basket.map((item) =>
        item.id == action.payload.id
          ? item.count <= 100
            ? (item.count = item.count + 1)
            : item
          : item
      )
      Cookies.set("basket", JSON.stringify(state.basket))
    },
    minusCount(state) {
      state.basket.map((item) =>
        item.id == action.payload.id
          ? item.count >= 0
            ? (item.count = item.count - 1)
            : item
          : item
      )
      Cookies.set("basket", JSON.stringify(state.basket))
    },
  },
})

export const { toggleBasket, changeCount, plusCount, minusCount } =
  basketSlice.actions

export default basketSlice.reducer
