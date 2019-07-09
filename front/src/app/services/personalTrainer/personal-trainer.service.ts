import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonalTrainer } from 'src/app/models/PerosnalTrainer';

@Injectable({
  providedIn: 'root'
})
export class PersonalTrainerService {

  public personalTrainerURL = "http://localhost:8080/personal-trainer";

  constructor(private httpClient:HttpClient) {

   }

   getPersonalTrainers(){
     return this.httpClient.get<PersonalTrainer[]>(this.personalTrainerURL + `/all`);
   }

   getPersonalTrainerById(id: String) {
     return this.httpClient.get<PersonalTrainer>(this.personalTrainerURL + `/${id}`);
   }

   getPersonalTrainerByUsername(username: String) {
     return this.httpClient.get<PersonalTrainer>(this.personalTrainerURL + `/username/${username}`);
   }

   addPersonalTrainer(personalTrainer: PersonalTrainer, image:File ) {
    const postData = new FormData();
    if(image) {
      postData.append("profileImage", image, image.name);
    } postData.append("data", JSON.stringify(personalTrainer));
    return this.httpClient.post(this.personalTrainerURL + `/register`, postData);
  }

  updatePersonalTrainer(username: String, personalTrainer: PersonalTrainer, image: File) {
    const postData = new FormData();
    if(image) {
      postData.append("profileImage", image, image.name);
    }
    postData.append("data", JSON.stringify(personalTrainer));
    return this.httpClient.put(this.personalTrainerURL+`/${username}`, postData);
  }


   removePersonalTrainer(id: String) {
     return this.httpClient.delete(this.personalTrainerURL + `/${id}`);
   }
}