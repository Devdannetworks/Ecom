import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Item {
  id: number;
  backgroundImage: string;
  available: boolean;
  price: number;
  value: number;
  name: string;
  prevPrice: number;
  item?: Object;
  isInCart?: boolean;
  onClick?: (item: Item) => void;
}

interface CartState {
  cartItems: Item[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
