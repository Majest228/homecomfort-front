import { configureStore, combineReducers } from "@reduxjs/toolkit"
import favoriteReducer from "./favorite/favorite.slice"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import { rootReducer } from "./root-reducer"
import { userApi } from "./user/user.api"
import { adminApi } from "./admin/admin.api"



const persistConfig = {
  key: "root",
  storage,
  whitelist: ['user ', 'favorite']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },

    }).concat(
      userApi.middleware,
      adminApi.middleware

    ),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
