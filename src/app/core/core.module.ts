import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { ToyService } from './toy/toy.service';
import { AuthentService } from './authent/authent.service';


@NgModule({
	declarations: [ ],
	imports: [ HttpClientModule ],
	exports: [ ],
	providers: [ ToyService, AuthentService ]
})

export class CoreModule { }