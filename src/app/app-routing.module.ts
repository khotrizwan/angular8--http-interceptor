import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './city/add/add.component';
import { EditComponent } from './city/edit/edit.component';
import { ListComponent } from './city/list/list.component';
import { ViewComponent } from './city/view/view.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'home', component: ListComponent },
  {path: 'login', component: LoginComponent },
  { path: 'add-city', component: AddComponent },
  { path: 'edit-city/:id', component: EditComponent },
  { path: 'view-city/:id', component: ViewComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
