import { RootStateType } from 'app/store';

export const selectConstructorComponents = (state: RootStateType): any[] => state.constructorComponents;