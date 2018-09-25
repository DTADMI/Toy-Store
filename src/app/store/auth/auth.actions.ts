import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Router } from '@angular/router';


import { Subscription } from 'rxjs';

import { RootState } from '../root';

import { AuthentService } from '../../core/authent/authent.service';
import { User } from '../../core/models/user';

export const AUTHENT = {
	LOG: 'AUTHENT_LOGIN',
	OPEN: 'AUTHENT_OPEN',
	CLOSE: 'AUTHENT_CLOSE'
};

@Injectable()
export class AuthentActions{
	constructor(
		private ngRedux: NgRedux<RootState>,
		private authentService: AuthentService,
		private router: Router
	){}

	login = (user): Subscription => {
		return this.authentService.getUsers().subscribe((users: User[]) => {
			
			const connected = users.filter(currentUser => (currentUser.email === user.email && currentUser.password === user.password)).length === 1;

			this.ngRedux.dispatch({
				type: AUTHENT.LOG,
				connected
			});

			if(connected) {
				this.ngRedux.dispatch({
				type: AUTHENT.CLOSE
				});
				this.router.navigateByUrl('/basket');
			}
		});
	}

	open = () => {
		this.ngRedux.dispatch({
			type: AUTHENT.OPEN			
		});
	}

	close = () => {
		this.ngRedux.dispatch({
			type: AUTHENT.CLOSE
		});
	}
	
}