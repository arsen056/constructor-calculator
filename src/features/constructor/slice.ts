import { createSlice } from '@reduxjs/toolkit';
import { Display } from 'common/components/display';
import { Operations } from 'features/components/operations';
import { Numbers } from 'features/components/numbers';
import { Equal } from 'features/components/equal';

const initialState = [
  {id: 1, order: 1, component: Display},
  {id: 2, order: 2, component: Operations},
  {id: 3, order: 3, component: Numbers},
  {id: 4, order: 4, component: Equal}
];

const slice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {

  }
});

export const constructorReducer = slice.reducer;