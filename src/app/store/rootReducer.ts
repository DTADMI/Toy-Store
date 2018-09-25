import { combineReducers } from 'redux';
import { RootState } from './root';

import { authReducer } from './auth/auth.reducer';
import { toyReducer } from './toy/toy.reducer';


export const rootReducer = combineReducers<RootState>({
	toyReducer,
	authReducer
});