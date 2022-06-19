import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ContractService} from "../ContractService";
import {Router} from "@angular/router";
import {Employee} from "../Employee";
import {Customer} from "../../customer/Customer";
import {Facility} from "../../facility/Facility";
import {CustomerService} from "../../customer/CustomerService";
import {FacilityService} from "../../facility/FacilityService";
import {EmployeeService} from "../EmployeeService";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
    submitted = false;
  constructor(private contractService: ContractService,
              private  router: Router,
              private  customerService: CustomerService,
              private facilityService: FacilityService,
              private employeeService: EmployeeService
  ) {
  }

  public employees: Employee[] = [];
  public customers: Customer[] = [];
  public facilities: Facility[] = [];
  contractForm: FormGroup;

  get contractStartDate() {
    return this.contractForm.get("contractStartDate")
  }

  get idService() {
    return this.contractForm.get("idService")
  }

  get idCustomer() {
    return this.contractForm.get("idCustomer")
  }

  get idEmployee() {
    return this.contractForm.get("idEmployee")
  }

  get contractEndDate() {
    return this.contractForm.get("contractEndDate")
  }

  get contractTotalMoney() {
    return this.contractForm.get("contractTotalMoney")
  }

  ngOnInit(): void {
    // this.customers = this.customerService.getAllCustomerList();
    this.facilities = this.facilityService.getAllFacilityList();
    this.employees = this.employeeService.getEmployees();
    this.contractForm = new FormGroup({
      idEmployee: new FormControl(null, Validators.required),
      idCustomer: new FormControl(null),
      idService: new FormControl(null, Validators.required),
      contractStartDate: new FormControl('', [Validators.required,
        Validators.pattern('^\\d{4}\\-\\d{2}\\-\\d{2}$')]),
      contractEndDate: new FormControl('', [Validators.required,
        Validators.pattern('^\\d{4}\\-\\d{2}\\-\\d{2}$')]),
      contractDeposit: new FormControl('',Validators.min(0)),
      contractTotalMoney: new FormControl('', [Validators.required, this.validateMoney])
    });
  }

// custom validate
  validateMoney(contractTotalMoney: AbstractControl) {
    let value = contractTotalMoney.value;
    if (value <= 0) {
      return {'invalidMoney': true}
    } else {
      return null;
    }
  }

  submit() {
    this.submitted = true;
    if (this.contractForm.valid){
      const contractValue = this.contractForm.value;
      this.contractService.saveContract(contractValue).subscribe(() => {
        this.contractForm.reset();
        alert('Tạo thành công');
      }, e => {
        console.log(e);
      });
    }

  }
}
