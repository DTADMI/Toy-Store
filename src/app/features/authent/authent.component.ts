import { Component, OnInit } from '@angular/core';

import { User } from '../../core/models/user';
import { USERS } from '../../mocks/mock-authent';

import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

import { select } from '@angular-redux/store';

import { AuthentService } from '../../core/authent/authent.service';

import * as authentQueries from '../../store/auth/auth.queries'
import { AuthentActions } from '../../store/auth/auth.actions';


@Component({
  selector: 'app-authent',
  templateUrl: './authent.html'
})
export class AuthentComponent implements OnInit {	

	@select(authentQueries.isOpened) 
	isOpened: Observable<boolean>;

	user = {
		email: null,
		password: null
	};	

  constructor(private authentActions: AuthentActions){}

  ngOnInit() { }



	submitForm = () => {
		this.authentActions.login(this.user);
	}

	close = () => {
		this.authentActions.close();
	}

}