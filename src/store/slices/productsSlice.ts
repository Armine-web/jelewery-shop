import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Product } from '../../types/product';
import { getProducts } from '../../api/products';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const data = await getProducts();
  return data;
});

type ProductsState = {
  products: Product[];
  loading: boolean;
};

const initialState: ProductsState = {
  products: [],
  loading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      });
  },
});

export default productsSlice.reducer;
