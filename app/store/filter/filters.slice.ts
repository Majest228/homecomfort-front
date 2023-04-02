import IFilter from "./filters.type"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: IFilter = {
  category: [""],
  title: [""],
  price: [0, 99999999],
  categories: [],
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
    updateCategories(state, action: PayloadAction<Array<String>>) {
      state.categories = action.payload
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
  updateCategories,
  initialLoadOrder,
  changeShowFilter,
} = filtersSlice.actions

export default filtersSlice.reducer
