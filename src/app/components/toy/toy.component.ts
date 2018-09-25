import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


export interface Toy {
	title: string;
	icon: string;
	price: number;
	selected?: boolean;
}

@Component({
  selector: 'app-toy',
  templateUrl: './toy.html'
})
export class ToyComponent implements OnInit {	

	@Input() toy: Toy;
	@Input() icon: string;

	@Output() 
	select: EventEmitter<Toy> = new EventEmitter();

	handleSelect = () => {
		this.select.emit(this.toy);
	}

  constructor() { }

  ngOnInit() {
  }

}