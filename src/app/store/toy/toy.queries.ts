import { RootState } from '../root';

export function getToys(state: RootState){
	return state.toyReducer.toys;
};

export function countToys(state: RootState){
	return state.toyReducer.toys.filter(toy => toy.selected).length;
};