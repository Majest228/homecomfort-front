import favoriteReducer from "@/app/store/favorite/favorite.slice"
import basketReducer from "./basket/basket.slice"
import { combineReducers } from "@reduxjs/toolkit"
import { userSlice } from "@/app/services/user/user.slice"

export const rootReducer = combineReducers({
  favorites: favoriteReducer,
  basket: basketReducer,
  user: userSlice.reducer,
})
