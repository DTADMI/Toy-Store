import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToyComponent } from './toy/toy.component';
/*import { BasketComponent } from './basket/basket.component';
*/


const components = [
	ToyComponent
];

@NgModule({
	declarations: [...components],
	imports: [ CommonModule ],
	exports: [...components],
	providers: []
})

export class SharedModule { }