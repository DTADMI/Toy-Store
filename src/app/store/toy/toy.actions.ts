import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { RootState } from '../root';
import { Subscription } from 'rxjs';


import { ToyService } from '../../core/toy/toy.service';
import { Toy } from '../../components/toy/toy.component';

export const TOY = {
	GET_TOYS: 'TOY_GET_TOYS',
	SELECT_TOY: 'TOY_SELECT_TOY',
	COUNT_TOYS: 'TOY_COUNT_TOYS'
};

@Injectable()
export class ToyActions{
	constructor(
		private ngRedux: NgRedux<RootState>,
		private toyService: ToyService
	){}

	getToys = (): Subscription => {
		return this.toyService.getToys().subscribe((toys: Toy[]) => {
			this.ngRedux.dispatch({
				type: TOY.GET_TOYS,
				toys
			});
		});
	}

	selectToy = (toy: Toy) => {
		this.ngRedux.dispatch({
			type: TOY.SELECT_TOY,
			toy
		});
	}
/*
	countToys = (toy: Toy) => {
		//return countToys++;
	}*/
}