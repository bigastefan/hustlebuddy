import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './authorization/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  isLoggedIn = false;
  public loggedUserUsername: String;
  private loggedUserRoles: String[];
  public loggedUserType: String;
  private loggedInSubcription : Subscription;
  roles = [];
  private roleSubcription : Subscription;

  constructor(private authorizationService : AuthService){}

  ngOnInit() {
    this.isLoggedIn = this.authorizationService.isLoggedIn();
    this.loggedInSubcription = this.authorizationService.loggedInStatusChanged.subscribe(
      (status: boolean)=>{
        this.isLoggedIn = status;
        this.setUserForEditProfile();
      }
    );
    this.setUserForEditProfile();

    this.roles = this.authorizationService.getCurrentRoles();
    this.roleSubcription = this.authorizationService.roleChanged.subscribe(
      (roles: [])=>{
        this.roles = roles;
      }
    );
  }


  setUserForEditProfile(){
      this.loggedUserUsername = this.authorizationService.getCurrentUser();
      this.loggedUserRoles = this.authorizationService.getCurrentRoles();
      this.loggedUserRoles.forEach(role => {
        if(role == "ROLE_ADMINISTRATOR"){
          this.loggedUserType = "administrator";
        }
        else if(role == "ROLE_PERSONAL_TRAINER"){
          this.loggedUserType = "personalTrainer";
        }
        else if(role == "ROLE_CLIENT"){
          this.loggedUserType = "cleint";
        }
        
      });
  }
  
  
  onLogout(){
    this.authorizationService.logout();
  }
  
  ngOnDestroy(){
    this.loggedInSubcription.unsubscribe();
    this.roleSubcription.unsubscribe();
  }

}
