import {Component, OnInit} from '@angular/core';
import {FacilityService} from "../FacilityService";
import {Facility} from "../Facility";

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css']
})
export class HomeServiceComponent implements OnInit {
  facilityDelete: Facility = new Facility();

  constructor(private facilityService: FacilityService) {

  }

  ngOnInit(): void {
    this.getAllFAcility()
  }


  public sevices: Facility[] = [];


  getAllFAcility() {
    this.facilityService.getAll().subscribe(value => {
      this.sevices = value
    }, error => {
      console.log(error);
    })
  }


  getFacility(item: Facility) {
    this.facilityDelete = item;
  }

  sureDelete() {
    this.facilityService.deleteFacility(this.facilityDelete.id).subscribe(() => {
      alert(" you deleted 1 Service")
      this.ngOnInit();
    }, e => {
      console.log(e)
    });

  }

}
