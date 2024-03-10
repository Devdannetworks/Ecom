import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";

export interface FavItem {
  id: number;
  backgroundImage: string;
  available: boolean;
  price: number;
  value: number;
  name: string;
  prevPrice: number;
  item?: Object;
  isInCart?: boolean;
  onClick?: (item: FavItem) => void;
}

interface FavState {
  favItems: FavItem[];
}

const initialState: FavState = {
  favItems: [],
};

const favProductSlice = createSlice({
  name: "favProducts",
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<FavItem>) => {
      state.favItems.push(action.payload);
    },
    removeFromFavourite: (state, action: PayloadAction<number>) => {
      state.favItems = state.favItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addFavourite, removeFromFavourite } = favProductSlice.actions;
export const selectedFavProducts = (state: RootState) =>
  state.FavProducts.favItems;
export default favProductSlice.reducer;
