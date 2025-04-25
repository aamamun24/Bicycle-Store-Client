import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface TProduct {
  _id: string;
  name: string;
  image: string;
  brand: string;
  price: number;
  type: "Mountain" | "Road" | "Hybrid" | "BMX" | "Electric";
  description: string;
  quantity: number;
  inStock: boolean;
}

interface TProductState {
  products: TProduct[];
}

const initialState: TProductState = {
  products: [],
};

// Slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<TProduct[]>) {
      state.products = action.payload;
    },
  },
});

// Actions and reducer export
export const { setProducts } = productSlice.actions;
export default productSlice.reducer;

// Selector
export const selectProducts = (state: RootState) => state.products.products;
