import { ToyState } from '../root';

import { TOY } from './toy.actions';

export const defaultToyState: ToyState = {
	toys: []
};

export function toyReducer(state: ToyState = defaultToyState, action){
	switch(action.type){
		case TOY.GET_TOYS:
			return { toys : action.toys };
		case TOY.SELECT_TOY:{
			return { 
				toys: [ ...state.toys ].map(toy => {
					if(toy.title === action.toy.title){
						toy.selected = !toy.selected;
					}
					return toy;	
				})
			};
		}
		default:
			return state;
	}
} 
