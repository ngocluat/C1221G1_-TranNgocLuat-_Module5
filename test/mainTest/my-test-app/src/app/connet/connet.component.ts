import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Employee} from './model/Employee';
import {EmployeeService} from './serivce/EmployeeService';

@Component({
  selector: 'app-connet',
  templateUrl: './connet.component.html',
  styleUrls: ['./connet.component.css']
})
export class ConnetComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _employeeService: EmployeeService) {
  }

  private subscription: Subscription;

  public enployees: Employee[] = [];

    getAllEmployee() {
      this.subscription = this._employeeService.getEmployee().subscribe(data => {
        this.enployees = data;
      }, error => {
        console.log(error);
      });
    }

  ngOnInit(): void {
    this.getAllEmployee();
  }

}
