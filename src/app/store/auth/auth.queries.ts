import { RootState } from '../root';

export function isConnected(state: RootState){
	return state.authReducer.connected;
};

export function isOpened(state: RootState){
	return state.authReducer.opened;
};