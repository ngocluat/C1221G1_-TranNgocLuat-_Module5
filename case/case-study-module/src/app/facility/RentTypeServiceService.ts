import {RentTypeService} from "./RentTypeService";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RentTypeServiceService {
  public getRentTypes() {
    let rentTypes: RentTypeService[] = [
      {
        id: 1,
        name: "year"
      },
      {
        id: 2,
        name: "month"
      },
      {
        id: 3,
        name: "day"
      },
      {
        id: 4,
        name: "hour"
      },
    ]
    return rentTypes;
  }


  public getAllRentService() {
    return this.getRentTypes();
  }
}
