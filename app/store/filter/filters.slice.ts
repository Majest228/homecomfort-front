import IFilter from "./filters.type"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: IFilter = {
  categoryId: ["", ""],
  title: [""],
  price: [0, 99999999],
  showFilter: false,
}

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateSearch(state, action: PayloadAction<string>): void {
      state.title[0] = action.payload
    },
    updateMinPrice(state, action: PayloadAction<string>): void {
      action.payload == ""
        ? (state.price[0] = 0)
        : (state.price[0] = +action.payload)
    },
    updateMaxPrice(state, action: PayloadAction<string>): void {
      action.payload == ""
        ? (state.price[1] = 99999999)
        : (state.price[1] = +action.payload)
    },
    updateCategory(state, action: PayloadAction<string>) {
      state.categoryId[0] = action.payload[0]
      state.categoryId[1] = action.payload[1]
    },
    changeShowFilter(state) {
      state.showFilter = !state.showFilter
    },
    initialLoadOrder() {
      return initialState
    },
  },
  extraReducers: {},
})

export const {
  updateSearch,
  updateMinPrice,
  updateMaxPrice,
  updateCategory,
  initialLoadOrder,
  changeShowFilter,
} = filtersSlice.actions

export default filtersSlice.reducer
