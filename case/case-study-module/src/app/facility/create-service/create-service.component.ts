import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../FacilityService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {


  facilityForm: FormGroup = new FormGroup({
    serviceId: new FormControl(""),
    serviceCode: new FormControl("", Validators.required),
    serviceName: new FormControl("", Validators.required),
    serviceImage: new FormControl(""),
    serviceArea: new FormControl("", Validators.required),
    serviceCost: new FormControl("", Validators.required),
    serviceMaxPeople: new FormControl("", Validators.required),
    standardRoom: new FormControl("", Validators.required),
    descriptionOtherConvenience: new FormControl("", Validators.required),
    poolArea: new FormControl("", Validators.required),
    numberOfFloors: new FormControl("", Validators.required),
    freeAttachedService: new FormControl("", Validators.required),
    rentType: new FormControl(""),
    serviceTypeId: new FormControl(""),
    active: new FormControl("")
  });

  constructor(private  facilityService: FacilityService, private  route: Router) {
  }

  ngOnInit(): void {
  }

  submit() {

    const facility = this.facilityForm.value;
    this.facilityService.saveFacility(facility).subscribe(() => {
      this.facilityForm.reset();
      this.route.navigate(['/facility/home'])
      alert('Tạo thành công');
    }, e => {
      console.log(e);
    });
  }

}
