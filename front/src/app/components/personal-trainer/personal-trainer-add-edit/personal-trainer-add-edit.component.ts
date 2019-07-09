import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Observable, Observer } from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { FormErrorService } from 'src/app/formError.service';
import { PersonalTrainer } from 'src/app/models/PerosnalTrainer';
import { PersonalTrainerService } from 'src/app/services/personalTrainer/personal-trainer.service';
import { PackagesService } from 'src/app/services/packages/packages.service';
import { Packages } from 'src/app/models/Packages';
import { SnackBarService } from 'src/app/snack-bar.service';

@Component({
  selector: 'app-personal-trainer-add-edit',
  templateUrl: './personal-trainer-add-edit.component.html',
  styleUrls: ['./personal-trainer-add-edit.component.css']
})
export class PersonalTrainerAddEditComponent implements OnInit {

  @Input() public parrentForm: FormGroup;
  public personalTrainerDataForm : FormGroup;
  imagePreview: string;

  private edit = false;
  private username : string;
  public personalTrainer : PersonalTrainer
  public packages: Packages[]= [];
  public form : FormGroup;

  constructor(private snackBarService: SnackBarService, private personalTrainerService: PersonalTrainerService, private packagesService: PackagesService, private route: ActivatedRoute, public formErrorService: FormErrorService) { 

  }

  ngOnInit() {
    this.form = new FormGroup({
      biography: new FormControl(''),
      packages: new FormControl('')
    });
    if(this.route.snapshot.paramMap.get("username")){
      this.edit = true;
      this.username = this.route.snapshot.paramMap.get("username");
      this.personalTrainerService.getPersonalTrainerByUsername(this.username).subscribe((data: PersonalTrainer) => {
        this.personalTrainer = data;
        this.form.patchValue(this.personalTrainer);
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
           if(JSON.stringify(p) == JSON.stringify(this.personalTrainer.packages)){
             this.personalTrainerDataForm.patchValue({p : p});
           }
         })
       }
    });
  }

  savePersonalTrainer(){
    if(this.form.invalid){
      this.formErrorService.markFormGroupTouched(this.form);
    }else{
      const pt = this.form.value;
      delete pt['accountData']['confirmPassword'];
      delete pt['personalData']['profileImage'];
  
      console.log(pt)
      
      if(this.edit){
        pt.accountData.id = this.personalTrainer.accountData.id
        pt.personalData.id = this.personalTrainer.personalData.id
        this.personalTrainer = pt;
        this.personalTrainerService.updatePersonalTrainer(this.username, this.personalTrainer, this.form.get("personalData").get('profileImage').value).subscribe();
      }else{
        this.personalTrainer = pt;
        this.personalTrainerService.addPersonalTrainer(pt, this.form.get('personalData').get("profileImage").value).subscribe();
        this.snackBarService.openSnackBar("You have successfully registered"+ "!", "X")
        this.form.reset();
      }
      
    }
  }
}
