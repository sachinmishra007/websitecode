import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/forms', pathMatch: 'full'
  },
  {
    path: 'first',
    loadChildren: () => import('../app/first/first.module').then(_map => _map.FirstModule)
  },
  {
    path: 'second',
    loadChildren: () => import('../app/second/second.module').then(_map => _map.SecondModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('../app/forms/forms.module').then(_map => _map.FormsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
