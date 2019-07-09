import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Administrator } from 'src/app/models/Administrator';
@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  public administratorURL = "http://localhost:8080/administrator";

  constructor(private httpClient: HttpClient) { 

  }

  getAdministrators() {
    return this.httpClient.get<Administrator[]>(this.administratorURL + `/all`);
  }  

  getAdministratortById(id: String) {
    return this.httpClient.get<Administrator>(this.administratorURL + `/${id}`);
  }

  getAdministratorByUsername(username: String) {
    return this.httpClient.get<Administrator>(this.administratorURL + `/username/${username}`);
  }

  addAdministrator(administrator: Administrator, image:File ) {
    const postData = new FormData();
    if(image) {
      postData.append("profileImage", image, image.name);
    } postData.append("data", JSON.stringify(administrator));
    return this.httpClient.post(this.administratorURL + `/register`, postData);
  }

  updateAdministrator(username: String, administrator: Administrator, image: File) {
    const postData = new FormData();
    if(image) {
      postData.append("profileImage", image, image.name);
    }
    postData.append("data", JSON.stringify(administrator));
    return this.httpClient.put(this.administratorURL+`/${username}`, postData);
  }
  
  removeAdministrator(id: String) {
    return this.httpClient.delete(this.administratorURL + `/${id}`);
  }

}
