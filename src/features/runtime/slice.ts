import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ComponentType = {
  id: number,
  order: number,
  component: () => JSX.Element
}

const initialState: ComponentType[] = [

];

const slice = createSlice({
  name: 'runtime',
  initialState,
  reducers: {
    pushElement: (state, action: PayloadAction<ComponentType>) => {
      state.push(action.payload);
    }
  }
});

export const {pushElement} = slice.actions;

export const runtimeReducer = slice.reducer;