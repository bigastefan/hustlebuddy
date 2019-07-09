import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Client } from 'src/app/models/Client';
import { Packages } from 'src/app/models/Packages';
import { SnackBarService } from 'src/app/snack-bar.service';
import { PackagesService } from 'src/app/services/packages/packages.service';
import { ClientService } from 'src/app/services/client/client.service';
import { ActivatedRoute } from '@angular/router';
import { FormErrorService } from 'src/app/formError.service';

@Component({
  selector: 'app-client-add-edit',
  templateUrl: './client-add-edit.component.html',
  styleUrls: ['./client-add-edit.component.css']
})
export class ClientAddEditComponent implements OnInit {

  @Input() public parrentForm: FormGroup;
  public clientDataForm : FormGroup;
  imagePreview: string;

  private edit = false;
  private username : string;
  public client : Client
  public form : FormGroup;
  public gender: String[] = ["Male", "Female"];
  public packages: Packages[]= [];


  constructor(private snackBarService: SnackBarService ,private packagesService:PackagesService, private clientService: ClientService, private route: ActivatedRoute, public formErrorService: FormErrorService) { 

  }


  ngOnInit() {
    this.form = new FormGroup({
      birthday: new FormControl(''),
      // gender: new FormControl(''),
      packages: new FormControl('')
    });
    if(this.route.snapshot.paramMap.get("username")){
      this.edit = true;
      this.username = this.route.snapshot.paramMap.get("username");
      this.clientService.getClientrByUsername(this.username).subscribe((data: Client) => {
        this.client = data;
        this.form.patchValue(this.client);
        this.getPackages();
      });
    } else {
      this.getPackages();
    }
  }

  getPackages(){
    this.packagesService.getPackages().subscribe((data: Packages[]) => {
      this.packages = data;
      console.log(this.packages);
       if(this.edit){
         this.packages.forEach(p => {
           if(JSON.stringify(p) == JSON.stringify(this.client.packages)){
             this.clientDataForm.patchValue({p : p});
           }
         })
       }
    });
  }

  saveClient(){
    if(this.form.invalid){
      this.formErrorService.markFormGroupTouched(this.form);
    }else{
      const c = this.form.value;
      delete c['accountData']['confirmPassword'];
      delete c['personalData']['profileImage'];
  
      console.log(c)
      
      if(this.edit){
        c.accountData.id = this.client.accountData.id
        c.personalData.id = this.client.personalData.id
        c.clientInformations.id = this.client.clientInformations.id
        this.client = c;
        this.clientService.updateClient(this.username, this.client, this.form.get("personalData").get('profileImage').value).subscribe();
      }else{
        this.client = c;
        this.clientService.addClient(c, this.form.get('personalData').get("profileImage").value).subscribe();
        this.snackBarService.openSnackBar("You have successfully registered"+ "!", "X")
        this.form.reset();
      }
      
    }
  }
}
