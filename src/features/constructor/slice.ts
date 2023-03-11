import { createSlice } from '@reduxjs/toolkit';
import { Display } from 'common/components/display';
import { Operations } from 'features/components/operations';
import { Numbers } from 'features/components/numbers';
import { Equal } from 'features/components/equal';

const initialState = [
  {order: 1, component: () => Display},
  {order: 2, component: () => Operations},
  {order: 3, component: () => Numbers},
  {order: 4, component: () => Equal}
];

const slice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {

  }
});

export const constructorReducer = slice.reducer;