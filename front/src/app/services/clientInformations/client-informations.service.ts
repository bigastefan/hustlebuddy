import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientInformations } from 'src/app/models/ClientInformations';

@Injectable({
  providedIn: 'root'
})
export class ClientInformationsService {

  public clientInformationsURL = "http://localhost:8080/client-informations";

  constructor(private httpClient:HttpClient) {

   }

   getClientInformations(){
     return this.httpClient.get<ClientInformations[]>(this.clientInformationsURL + `/all`);
   }

   getClientInformationById(id: String) {
     return this.httpClient.get<ClientInformations>(this.clientInformationsURL + `/${id}`);
   }

   addClientInformations(clientInformations: ClientInformations) {
     return this.httpClient.post(this.clientInformationsURL + `/add`, clientInformations);
   }

   updateClientInformations(id: String, clientInformations: ClientInformations) {
     return this.httpClient.put(this.clientInformationsURL + `/${id}`, clientInformations);
   }

   removeClientInformations(id: String) {
     return this.httpClient.delete(this.clientInformationsURL + `/${id}`);
   }
}