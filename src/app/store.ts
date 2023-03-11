import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { runtimeReducer } from 'features/runtime/slice';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({runtime: runtimeReducer});

export type RootStateType = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
});