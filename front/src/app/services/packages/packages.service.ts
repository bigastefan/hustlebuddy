import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Packages } from 'src/app/models/Packages';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  public packagesURL = "http://localhost:8080/packages";

  constructor(private httpClient:HttpClient) {

   }

   getPackages(){
     return this.httpClient.get<Packages[]>(this.packagesURL + `/all`);
   }

   getPackageById(id: String) {
     return this.httpClient.get<Packages>(this.packagesURL + `/${id}`);
   }


   addPackages(packages: Packages) {
     return this.httpClient.post(this.packagesURL + `/add`, packages);
   }

   updatePackage(id: String, packages: Packages) {
     return this.httpClient.put(this.packagesURL + `/${id}`, packages);
   }

   removePackage(id: String) {
     return this.httpClient.delete(this.packagesURL + `/${id}`);
   }
}