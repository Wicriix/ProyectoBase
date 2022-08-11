import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent
  ],
  imports: [
    PublicRoutingModule,
    SharedModule
  ],
  exports:[],
  providers:[]
})
export class PublicModule {
  constructor(){}
}
