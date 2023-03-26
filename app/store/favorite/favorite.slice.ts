import { createSlice } from "@reduxjs/toolkit"

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: [],
  },
  reducers: {
    toggleFavorite(state, action) {
      let checked = false
      state.favorite.forEach((item: any) => {
        if (item.id == action.payload.id) checked = true
        console.log(checked)
      })
      if (checked) {
        const newState = state.favorite.filter(
          (item: any) => item.id !== action.payload.id
        )
        state.favorite = newState
      } else {
        state.favorite.push(action.payload)
      }
    },
  },
})

export const { toggleFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer
