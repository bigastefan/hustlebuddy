import { AccountData } from './AccountData';
import { PersonalData } from './PersonalData';
import { Packages } from './Packages';

export class PersonalTrainer {
    id: number;
    biography: String;
    accountData: AccountData;
    personalData: PersonalData;
    packages: Packages;
}