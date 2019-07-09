import { AccountData } from './AccountData';
import { PersonalData } from './PersonalData';
import { Packages } from './Packages';
import { ClientInformations } from './ClientInformations'

export class Client {
    id: number;
    birthday: Date;
    accountData: AccountData;
    personalData: PersonalData;
    clientInformations: ClientInformations;
    packages: Packages;
}