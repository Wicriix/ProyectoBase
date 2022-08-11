import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public.component';


const routes: Routes = [
  {path: '', component: PublicComponent, children:
    [
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'home', component: HomeComponent},
      //{path:'login', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PublicRoutingModule {
  constructor(){}
}
