import { createSlice } from '@reduxjs/toolkit';
import { Operations } from 'features/components/operations';
import { Numbers } from 'features/components/numbers';

const initialState = [
  {order: 1, component: Operations},
  {order: 2, component: Numbers}
];

const slice = createSlice({
  name: 'runtime',
  initialState,
  reducers: {
    
  }
});

export const runtimeReducer = slice.reducer;