import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { select } from '@angular-redux/store';

import * as toyQueries from '../../store/toy/toy.queries';
import * as authQueries from '../../store/auth/auth.queries';

import { AuthentActions } from '../../store/auth/auth.actions';



@Component({
  selector: 'app-header',
  templateUrl: './header.html'
})
export class HeaderComponent implements OnInit {	

	@select(toyQueries.countToys) nbToys: Observable<number>;
	@select(authQueries.isConnected) isConnected: Observable<boolean>;

  constructor(
  	private authActions: AuthentActions,
  	private router: Router
  	) { }

  ngOnInit() {
  }

  openAuthent = () => {
  	//this.router.navigateByUrl('/basket');
  	this.authActions.open();
  }

}
