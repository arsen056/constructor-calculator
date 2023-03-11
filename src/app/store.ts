import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { runtimeReducer } from 'features/runtime';
import thunk from 'redux-thunk';
import { constructorReducer } from 'features/constructor';

const rootReducer = combineReducers({ runtime: runtimeReducer, constructor: constructorReducer });

export type RootStateType = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
});