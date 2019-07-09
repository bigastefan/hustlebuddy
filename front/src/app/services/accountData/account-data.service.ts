import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AccountData } from 'src/app/models/AccountData';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  public accountDataURL = "http://localhost:8080/account-data";

  constructor(private httpClien:HttpClient) {

   }

   getAccountDatas(){
     return this.httpClien.get<AccountData[]>(this.accountDataURL + `/all`);
   }

   getAccountDataById(id: String) {
     return this.httpClien.get<AccountData>(this.accountDataURL + `/${id}`);
   }

   addAccountData(accountData: AccountData) {
     return this.httpClien.post(this.accountDataURL + `/add`, accountData);
   }

   updateAccountData(id: String, accountData: AccountData) {
     return this.httpClien.put(this.accountDataURL + `/${id}`, accountData);
   }

   removeAccountData(id: String) {
     return this.httpClien.delete(this.accountDataURL + `/${id}`);
   }
}
