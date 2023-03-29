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
        console.log(checked)
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
  },
})

export const { toggleBasket } = basketSlice.actions

export default basketSlice.reducer
