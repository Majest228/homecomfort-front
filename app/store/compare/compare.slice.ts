import { createSlice } from "@reduxjs/toolkit"

const compareSlice = createSlice({
  name: "compare",
  initialState: {
    compare: [],
  },
  reducers: {
    toggleCompare(state, action) {
      let checked = false

      state.compare.forEach((item: any) => {
        if (item.id == action.payload.id) checked = true
        console.log(checked)
      })
      if (checked) {
        const newState = state.compare.filter(
          (item: any) => item.id !== action.payload.id
        )
        state.compare = newState
      } else {
        state.compare.push(action.payload)
      }
    },
  },
})

export const { toggleCompare } = compareSlice.actions

export default compareSlice.reducer
