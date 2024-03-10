import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import favProductReducer from "./FavProductSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    FavProducts: favProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
