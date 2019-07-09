import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonalData } from 'src/app/models/PersonalData';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {

  public personalDataURL = "http://localhost:8080/personal-data";

  constructor(private httpClien:HttpClient) {

   }

   getPersonalDatas(){
     return this.httpClien.get<PersonalData[]>(this.personalDataURL + `/all`);
   }

   getPersonalDataById(id: String) {
     return this.httpClien.get<PersonalData>(this.personalDataURL + `/${id}`);
   }

   getPersonalDataByUsername(username: String) {
     return this.httpClien.get<PersonalData>(this.personalDataURL + `/username/${username}`);
   }

   addPersonalData(personalData: PersonalData) {
     return this.httpClien.post(this.personalDataURL + `/add`, personalData);
   }

   updatePersonalData(id: String, personalData: PersonalData) {
     return this.httpClien.put(this.personalDataURL + `/${id}`, personalData);
   }

   removePersonalData(id: String) {
     return this.httpClien.delete(this.personalDataURL + `/${id}`);
   }
}