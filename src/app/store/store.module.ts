import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { RootState, defaultState } from './root';
import { rootReducer } from './rootReducer';
import { environment } from '../../environments/environment';

import { AuthentActions } from './auth/auth.actions';
import { ToyActions } from './toy/toy.actions';

@NgModule({
  declarations: [],
  imports: [
    NgReduxModule
  ],
  providers: [
  	AuthentActions,
  	ToyActions
  ]
})
export class StoreModule {
	constructor(
		private ngRedux: NgRedux<RootState>,
		private devTools: DevToolsExtension
		){
		let enhancers = [];

		if(!environment.production){
			enhancers = [ ...enhancers, this.devTools.enhancer() ];
		}

		this.ngRedux.configureStore(
			rootReducer,
			defaultState,
			[],
			enhancers
		);
	}
}