import { Toy } from '../components/toy/toy.component';
import { defaultAuthState } from './auth/auth.reducer';
import { defaultToyState } from './toy/toy.reducer';

export interface AuthState{
	connected: boolean;
	opened: boolean;
}

export interface ToyState{
	toys: Toy[];
}

export interface RootState {
	authReducer: AuthState;
	toyReducer: ToyState;
}

export const defaultState: RootState = {
	authReducer: defaultAuthState,
	toyReducer: defaultToyState
}