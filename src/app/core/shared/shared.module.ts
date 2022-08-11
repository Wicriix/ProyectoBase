import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    NotFoundComponent

  ],
  imports: [
    HttpClientModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    HttpClientModule,
    RouterModule,
    NotFoundComponent,
    MaterialModule
  ],
  providers:[]
})
export class SharedModule {
  constructor(){}
}
