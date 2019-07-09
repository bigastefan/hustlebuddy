import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  public clientURL = "http://localhost:8080/client";

  constructor(private httpClient:HttpClient) {

   }

   getClients(){
     return this.httpClient.get<Client[]>(this.clientURL + `/all`);
   }

   getClientById(id: String) {
     return this.httpClient.get<Client>(this.clientURL + `/${id}`);
   }

   getClientrByUsername(username: String) {
     return this.httpClient.get<Client>(this.clientURL + `/username/${username}`);
   }

   addClient(client: Client, image:File ) {
    const postData = new FormData();
    if(image) {
      postData.append("profileImage", image, image.name);
    } postData.append("data", JSON.stringify(client));
    return this.httpClient.post(this.clientURL + `/register`, postData);
  }

  updateClient(username: String, client: Client, image: File) {
    const postData = new FormData();
    if(image) {
      postData.append("profileImage", image, image.name);
    }
    postData.append("data", JSON.stringify(client));
    return this.httpClient.put(this.clientURL+`/${username}`, postData);
  }


   removeClient(id: String) {
     return this.httpClient.delete(this.clientURL + `/${id}`);
   }
}
