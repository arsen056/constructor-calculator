import { createSlice } from '@reduxjs/toolkit';
import { Operations } from 'features/components/operations';
import { Numbers } from 'features/components/numbers';
import { Equal } from 'features/components/equal';
import { Display } from 'common/components/display';


const initialState = [
  {order: 1, component: () => Display},
  {order: 1, component: () => Operations},
  {order: 2, component: () => Numbers},
  {order: 3, component: () => Equal}
];

const slice = createSlice({
  name: 'runtime',
  initialState,
  reducers: {
    
  }
});

export const runtimeReducer = slice.reducer;