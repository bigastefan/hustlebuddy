import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './authorization/auth-interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Material } from './material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { AdministratorAddEditComponent } from './components/administrator/administrator-add-edit/administrator-add-edit.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { AccountDataComponent } from './components/account-data/account-data.component';
import { PersonalTrainerComponent } from './components/personal-trainer/personal-trainer.component';
import { PersonalTrainerAddEditComponent } from './components/personal-trainer/personal-trainer-add-edit/personal-trainer-add-edit.component';
import { ClientComponent } from './components/client/client.component';
import { ClientInformationsComponent } from './components/client-informations/client-informations.component';
import { ClientInformationsAddEditComponent } from './components/client-informations/client-informations-add-edit/client-informations-add-edit.component';
import { ClientAddEditComponent } from './components/client/client-add-edit/client-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministratorComponent,
    AdministratorAddEditComponent,
    PersonalDataComponent,
    AccountDataComponent,
    PersonalTrainerComponent,
    PersonalTrainerAddEditComponent,
    ClientComponent,
    ClientInformationsComponent,
    ClientInformationsAddEditComponent,
    ClientAddEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Material
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
