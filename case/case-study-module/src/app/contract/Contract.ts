import {Facility} from "../facility/Facility";
import {Customer} from "../customer/Customer";
import {Employee} from "./Employee";

export class Contract {
  id: number;
  idEmployee: Employee;
  idCustomer: Customer;
  idService: Facility;
  contractStartDate: string;
  contractEndDate: string;
  contractDeposit: number;
  contractTotalMoney: number;
}


