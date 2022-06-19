import {Component, OnInit} from '@angular/core';
import {ContractService} from "../ContractService";
import {Contract} from "../Contract";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-home-contract',
  templateUrl: './home-contract.component.html',
  styleUrls: ['./home-contract.component.css']
})
export class HomeContractComponent implements OnInit {

  constructor(private contractService: ContractService) {
  }

  private subscription: Subscription;

  public contracts: Contract[] = [];

  getAllContract() {
    this.subscription = this.contractService.getAll().subscribe(data => {
      this.contracts = data;
      console.log(data)
    }, error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.getAllContract()
  }

}
