import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTanquesComponent } from './components/lista-tanques/lista-tanques.component';
import { FormTanquesComponent } from './components/form-tanques/form-tanques.component';

const routes: Routes = [
  { path: '', redirectTo: 'tanques', pathMatch: 'full' },
  { path: 'tanques', component: ListaTanquesComponent },
  { path: 'tanques/nuevo', component: FormTanquesComponent },
  { path: 'tanques/:id', component: FormTanquesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
