import { AuthState } from '../root';

import { AUTHENT } from './auth.actions';

export const defaultAuthState: AuthState = {
	connected: false,
	opened: false
};

export function authReducer(state: AuthState = defaultAuthState, action){
	
	switch(action.type){

		case AUTHENT.LOG:
			return { ...state , connected:true	};

		case AUTHENT.OPEN:
			return { ...state , opened:true	};

		case AUTHENT.CLOSE:
			return { ...state , opened:false };	

		default:
			return state;
	}
} 
