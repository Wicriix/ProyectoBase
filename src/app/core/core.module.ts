import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,

  ],
  exports:[
    SharedModule
  ],
  providers:[]
})
export class CoreModule {
  constructor(){}
}
