import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdministratorAddEditComponent } from './components/administrator/administrator-add-edit/administrator-add-edit.component';
import { PersonalTrainerAddEditComponent } from './components/personal-trainer/personal-trainer-add-edit/personal-trainer-add-edit.component';
import { ClientAddEditComponent } from './components/client/client-add-edit/client-add-edit.component';

const routes: Routes = [

  {path:'login', component:LoginComponent},
  { path:'register-administrator', component:AdministratorAddEditComponent},
  { path:'register-personal-trainer', component: PersonalTrainerAddEditComponent },
  { path:'register-client', component: ClientAddEditComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
