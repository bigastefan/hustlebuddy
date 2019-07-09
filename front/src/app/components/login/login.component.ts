import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authorization/auth.service' ;
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authorizationService : AuthService) { }

  ngOnInit() {
  }

  login(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.authorizationService.login(form.value.username, form.value.password);
  }

  logout() {
    this.authorizationService.logout();
  }

}
