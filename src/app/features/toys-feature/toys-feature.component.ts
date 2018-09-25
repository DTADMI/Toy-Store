import { Component, OnInit } from '@angular/core';

import { Toy } from '../../components/toy/toy.component';
import { TOYS } from '../../mocks/mock-toys';

import { Subscription } from 'rxjs';

import { select } from '@angular-redux/store';

import { ToyService } from '../../core/toy/toy.service';

import * as toyQueries from '../../store/toy/toy.queries'
import { ToyActions } from '../../store/toy/toy.actions';


@Component({
  selector: 'app-toys',
  templateUrl: './toys.html'
})
export class ToysFeatureComponent implements OnInit {	

  @select(toyQueries.getToys) toys: Toy[];

  constructor(private toyActions: ToyActions){}

  ngOnInit() {
    this.toyActions.getToys();
  }

  select = (toy: Toy) => {
    this.toyActions.selectToy(toy);
  }

	/*toys: Toy[] = TOYS;
	unsub: Subscription;

	select = (toy: Toy) => {};

  constructor(private toyService: ToyService) { }

  ngOnInit() {
  	this.unsub = this.toyService.getToys().subscribe(res => { this.toys = res;});
  }

  ngOnDestroy(){
  	this.unsub.unsubscribe();
  }*/
  
}
