import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FacilityService} from "../FacilityService";
import {Facility} from "../Facility";
import {rentTypeList} from "../RentTypeService";

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  constructor(private  facilityService: FacilityService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

  }

  facilityForm: FormGroup;
  facility = {} as Facility;
  rentTypeList = rentTypeList;
  id: number;

  checkItemRent(item1, item2) {
    return item1 && item2 && item1.id == item2.id;
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      console.log(this.id);
      this.getFacility(this.id);
    });

  }

  getFacility(id: number) {
    return this.facilityService.findById(id).subscribe(facility => {
      console.log(facility);
      console.log('augukv');
      this.facilityForm = new FormGroup({
        serviceId: new FormControl(facility.id),
        serviceCode: new FormControl(facility.serviceCode),
        serviceName: new FormControl(facility.serviceName, Validators.required),
        serviceImage: new FormControl(facility.serviceImage),
        serviceArea: new FormControl(facility.serviceArea, Validators.required),
        serviceCost: new FormControl(facility.serviceCost, Validators.required),
        serviceMaxPeople: new FormControl(facility.serviceMaxPeople, Validators.required),
        standardRoom: new FormControl(facility.standardRoom, Validators.required),
        descriptionOtherConvenience: new FormControl(facility.descriptionOtherConvenience, Validators.required),
        poolArea: new FormControl(facility.poolArea, Validators.required),
        numberOfFloors: new FormControl(facility.numberOfFloors, Validators.required),
        freeAttachedService: new FormControl(facility.freeAttachedService, Validators.required),
        rentType: new FormControl(facility.rentType),
        serviceTypeId: new FormControl(facility.serviceTypeId, Validators.required),
        active: new FormControl(facility.active)
      });
    });
  }

  updateFacility() {
    const facilityValue = this.facilityForm.value;
    console.log(facilityValue)
    this.facilityService.updateFacility(this.id, facilityValue).subscribe(next => {
      alert('Cập nhật thành công');
    }, e => {
      console.log(e)
    }, () => {
      this.router.navigate(['/facility/home'])

    });


  }

}
