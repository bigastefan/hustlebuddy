import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormErrorService } from 'src/app/formError.service';

@Component({
  selector: 'app-client-informations-add-edit',
  templateUrl: './client-informations-add-edit.component.html',
  styleUrls: ['./client-informations-add-edit.component.css']
})
export class ClientInformationsAddEditComponent implements OnInit {

  @Input() public parrentForm: FormGroup;
  public clientInformationsForm : FormGroup;

  public genders: String[] = ["Male", "Female"];

  constructor(private formBuilder: FormBuilder, public formError: FormErrorService) { 

  }

  ngOnInit() {
    this.clientInformationsForm = this.formBuilder.group({
      gender: ['', {validators: [Validators.required]}],
      // weight: ['', {validators: [Validators.required]}],
      // height: ['', {validators: [Validators.required]}],
      // chestMeasurement: ['', {validators: [Validators.required]}],
      // waistMeasurement: ['', {validators: [Validators.required]}],

    })

    this.parrentForm.addControl("clientInformations", this.clientInformationsForm);
  }

}
