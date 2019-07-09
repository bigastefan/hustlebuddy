import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdministratorAddEditComponent } from './components/administrator/administrator-add-edit/administrator-add-edit.component';

const routes: Routes = [

  {path:'login', component:LoginComponent},
  { path:'register-admin', component:AdministratorAddEditComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
