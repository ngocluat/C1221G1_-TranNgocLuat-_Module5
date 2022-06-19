import {RentTypeService} from "./RentTypeService";

export class Facility {
  id: number;
  serviceCode: string;
  serviceName: string;
  serviceImage: string;
  serviceArea: number;
  serviceCost: number;
  serviceMaxPeople: number;
  standardRoom: string;
  descriptionOtherConvenience: string;
  poolArea: number;
  numberOfFloors: number;
  freeAttachedService: string;
  rentType: RentTypeService;
  serviceTypeId: number;
  active: number;



}
