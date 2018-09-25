import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from './store/store.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FeaturesModule,    
    NgReduxModule,
    StoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
