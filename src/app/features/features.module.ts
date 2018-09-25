import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { SharedModule } from '../components/shared.module';


import { HeaderComponent } from './header/header.component';
import { ToysFeatureComponent } from './toys-feature/toys-feature.component';
import { AuthentComponent } from './authent/authent.component';
import { BasketComponent } from './basket/basket.component';


const components = [
	HeaderComponent,
	ToysFeatureComponent,
	AuthentComponent,
	BasketComponent
];

@NgModule({
	declarations: [...components],
	imports: [ 
		CommonModule,
		FormsModule, 
		SharedModule,
		RouterModule 
	],
	exports: [...components, SharedModule],
	providers: []
})

export class FeaturesModule { }