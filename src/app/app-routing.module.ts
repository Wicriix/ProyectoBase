import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/shared/components/not-found/not-found.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) }, // se implementa lazylooading para cargar mas rapida la pagina
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabled' })], // se usa tecnica de hashing para refresco de paginas
  exports: [RouterModule]
})
export class AppRoutingModule { }
