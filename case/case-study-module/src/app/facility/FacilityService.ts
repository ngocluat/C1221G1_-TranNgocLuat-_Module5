import {Facility} from "./Facility";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  private readonly API_URL = 'http://localhost:8080/rest/list-service';

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private  http: HttpClient) {

  }

  getAllService(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.API_URL);
  }




  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.apiBaseUrl + '/facility');
  }

  saveFacility(facilityValue): Observable<Facility> {
    return this.http.post<Facility>(this.apiBaseUrl + '/facility', facilityValue);
  }

  findById(facilityId: number): Observable<Facility> {
    return this.http.get<Facility>(`${(this.apiBaseUrl)}/facility/${facilityId}`);
  }

  updateFacility(id: number, facilityValue: Facility): Observable<Facility> {
    return this.http.put<Facility>(`${(this.apiBaseUrl)}/facility/${id}`, facilityValue);
  }

  deleteFacility(id: number): Observable<Facility> {
    return this.http.delete<Facility>(`${(this.apiBaseUrl)}/facility/${id}`);
  }


  private facilities: Facility[] = [
    {
      id: 1,
      serviceCode: "DV-0001",
      serviceName: "Villa Beach Front",
      serviceImage: "https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg",
      serviceArea: 25000,
      serviceCost: 10000000,
      serviceMaxPeople: 10,
      standardRoom: "vip",
      descriptionOtherConvenience: "Có hồ bơi",
      poolArea: 500,
      numberOfFloors: 4,
      freeAttachedService: "",
      rentType: {
        id: 3,
        name: "day"
      },
      serviceTypeId: 1,
      active: 1
    },
    {
      id: 2,
      serviceCode: "DV-0002",
      serviceName: "House Princess 01",
      serviceImage: "https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg",
      serviceArea: 14000,
      serviceCost: 5000000,
      serviceMaxPeople: 7,
      standardRoom: "vip",
      descriptionOtherConvenience: "Có thêm bếp nướng",
      poolArea: 0,
      numberOfFloors: 3,
      freeAttachedService: "",
      rentType: {
        id: 2,
        name: "month"
      },
      serviceTypeId: 2,
      active: 1
    }]

  getAllFacilityList() {
    return this.facilities
  }

  //   {
  //     serviceId: 3,
  //     serviceCode: "DV-0003",
  //     serviceName: "Room Twin 01",
  //     serviceImage: "https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg",
  //     serviceArea: 5000,
  //     serviceCost: 1000000,
  //     serviceMaxPeople: 2,
  //     standardRoom: "normal",
  //     descriptionOtherConvenience: "Có tivi",
  //     poolArea: 0,
  //     numberOfFloors: 0,
  //     freeAttachedService: "",
  //     rentType: {
  //       id: 4,
  //       name: "hour"
  //     },
  //     serviceTypeId: 3,
  //     active: 1
  //   },
  //   {
  //     serviceId: 4,
  //     serviceCode: "DV-0004",
  //     serviceName: "Villa No Beach Front",
  //     serviceImage: "https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg",
  //     serviceArea: 22000,
  //     serviceCost: 9000000,
  //     serviceMaxPeople: 8,
  //     standardRoom: "normal",
  //     descriptionOtherConvenience: "Có hồ bơi",
  //     poolArea: 300,
  //     numberOfFloors: 3,
  //     freeAttachedService: "",
  //     rentType: {
  //       id: 3,
  //       name: "day"
  //     },
  //     serviceTypeId: 1,
  //     active: 1
  //   },
  //   {
  //     serviceId: 5,
  //     serviceCode: "DV-0005",
  //     serviceName: "House Princess 02",
  //     serviceImage: "https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg",
  //     serviceArea: 10000,
  //     serviceCost: 4000000,
  //     serviceMaxPeople: 5,
  //     standardRoom: "normal",
  //     descriptionOtherConvenience: "Có thêm bếp nướng",
  //     poolArea: 0,
  //     numberOfFloors: 2,
  //     freeAttachedService: "",
  //     rentType: {
  //       id: 3,
  //       name: "day"
  //     },
  //     serviceTypeId: 2,
  //     active: 1
  //   },
  //   {
  //     serviceId: 6,
  //     serviceCode: "DV-0006",
  //     serviceName: "Room Twin 02",
  //     serviceImage: "https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg",
  //     serviceArea: 3000,
  //     serviceCost: 900000,
  //     serviceMaxPeople: 2,
  //     standardRoom: "normal",
  //     descriptionOtherConvenience: "Có tivi",
  //     poolArea: 0,
  //     numberOfFloors: 0,
  //     freeAttachedService: "",
  //     rentType: {
  //       id: 4,
  //       name: "hour"
  //     },
  //     serviceTypeId: 3,
  //     active: 1
  //   }
  // ]
  //
  //
  // public getFacilities() {
  //   return this.facilities;
  // }
  //
  // saveFacility(facility: Facility) {
  //   facility.serviceId = this.facilities.length + 1;
  //   this.facilities.push(facility);
  // }
  //
  // public findById(id: number): Facility {
  //   return this.facilities.find(service => service.serviceId === id);
  // }
  //
  //
  // updateFacility(id: number, facilityValue: Facility) {
  //   for (let i = 0; i < this.facilities.length; i++) {
  //     if (this.facilities[i].serviceId === id) {
  //       this.facilities[i] = facilityValue;
  //     }
  //   }
  // }
  //
  //
  // deleteFaclility(facility: Facility) {
  //   this.facilities = this.facilities.filter(item => {
  //     return item.serviceId !== facility.serviceId
  //   })
  // }

}
