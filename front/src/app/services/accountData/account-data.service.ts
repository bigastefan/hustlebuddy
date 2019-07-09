import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AccountData } from 'src/app/models/AccountData';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  public accountDataURL = "http://localhost:8080/account-data";

  constructor(private httpClient:HttpClient) {

   }

   getAccountDatas(){
     return this.httpClient.get<AccountData[]>(this.accountDataURL + `/all`);
   }

   getAccountDataById(id: String) {
     return this.httpClient.get<AccountData>(this.accountDataURL + `/${id}`);
   }

   addAccountData(accountData: AccountData) {
     return this.httpClient.post(this.accountDataURL + `/add`, accountData);
   }

   updateAccountData(id: String, accountData: AccountData) {
     return this.httpClient.put(this.accountDataURL + `/${id}`, accountData);
   }

   removeAccountData(id: String) {
     return this.httpClient.delete(this.accountDataURL + `/${id}`);
   }
}
