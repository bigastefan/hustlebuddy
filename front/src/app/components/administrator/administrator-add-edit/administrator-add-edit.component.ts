import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Observable, Observer } from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { Administrator } from 'src/app/models/Administrator';
import { FormErrorService } from 'src/app/formError.service';
import { AdministratorService } from 'src/app/services/administrator/administrator.service';

@Component({
  selector: 'app-administrator-add-edit',
  templateUrl: './administrator-add-edit.component.html',
  styleUrls: ['./administrator-add-edit.component.css']
})
export class AdministratorAddEditComponent implements OnInit {

  @Input() public parrentForm: FormGroup;
  public administratorDataForm : FormGroup;
  imagePreview: string;

  private edit = false;
  private username : string;
  public administrator : Administrator
  public form : FormGroup;


  constructor(private administratorService: AdministratorService, private route: ActivatedRoute, public formErrorService: FormErrorService) { 

  }

  ngOnInit() {
    this.form = new FormGroup({});
    if(this.route.snapshot.paramMap.get("username")){
      this.edit = true;
      this.username = this.route.snapshot.paramMap.get("username");
      this.administratorService.getAdministratorByUsername(this.username).subscribe((data: Administrator) => {
        this.administrator = data;
        this.form.patchValue(this.administrator);
      });
    }
  }

  saveAdministrator(){
    if(this.form.invalid){
      this.formErrorService.markFormGroupTouched(this.form);
    }else{
      const admin = this.form.value;
      delete admin['accountData']['confirmPassword'];
      delete admin['personalData']['profileImage'];
  
      console.log(admin)
      
      if(this.edit){
        admin.accountData.id = this.administrator.accountData.id
        admin.personalData.id = this.administrator.personalData.id
        this.administrator = admin;
        this.administratorService.updateAdministrator(this.username, this.administrator, this.form.get("personalData").get('profileImage').value).subscribe();
      }else{
        this.administrator = admin;
        this.administratorService.addAdministrator(admin, this.form.get('personalData').get("profileImage").value).subscribe();
        this.form.reset();
      }
      
    }
  }
  
}
