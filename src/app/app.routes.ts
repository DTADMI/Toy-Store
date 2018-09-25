import { Routes } from '@angular/router';

import { BasketComponent } from './features/basket/basket.component';
import { ToysFeatureComponent } from './features/toys-feature/toys-feature.component';

export const routes: Routes = [
  { 
  	path: 'toys', 
  	component: ToysFeatureComponent 
  },
  { 
  	path: 'basket',      
  	component: BasketComponent 
  },
  { 
  	path: '',
    redirectTo: '/toys',
    pathMatch: 'full'
  },
  { 
  	path: '**', 
  	redirectTo: '/toys' 
  }
];