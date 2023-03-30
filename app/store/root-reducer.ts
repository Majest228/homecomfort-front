import favoriteReducer from "@/app/store/favorite/favorite.slice"
import basketReducer from "./basket/basket.slice"
import compareReducer from "./compare/compare.slice"
import { combineReducers } from "@reduxjs/toolkit"
import { userSlice } from "@/app/services/user/user.slice"

export const rootReducer = combineReducers({
  favorites: favoriteReducer,
  basket: basketReducer,
  compare: compareReducer,
  user: userSlice.reducer,
})
