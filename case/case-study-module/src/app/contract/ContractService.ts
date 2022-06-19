import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "./Contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {


  private apiBaseUrl = environment.apiBaseUrl;
  constructor(private  http: HttpClient) {
  }

  getAllContactAPI(): Observable<Contract[]> {
    return this.http.get<Contract[]>(`${this.apiBaseUrl}/rest/list-contract`);
  }


  // private contracts: Contract[] = [
  //   {
  //     contractId: 1,
  //     contractStartDate: "2020-12-08",
  //     contractEndDate: "2020-12-08",
  //     contractDeposit: 0,
  //     contractTotalMoney: 1000000,
  //     idEmployee: {
  //       employeeId: 3,
  //       employeeName: 'Hồ Thị Yến',
  //       employeeBirthday: '1995-12-12',
  //       employeeIdCard: '999231723',
  //       employeeSalary: 14000000,
  //       employeePhone: '0412352315',
  //       employeeEmail: 'thiyen@gmail.com',
  //       employeeAddress: 'K234/11 Điện Biên Phủ, Gia Lai',
  //       positionId: 1,
  //       educationDegreeId: 3,
  //       divisionId: 2,
  //     },
  //     idContract: {
  //       contractId: 1,
  //       contractCode: "KH-0001",
  //       contractName: "Nguyễn Thị Hào",
  //       contractBirthDay: "1970-11-07",
  //       contractGender: 1,
  //       contractCMDD: "643431213",
  //       contractPhone: "0905423362",
  //       contractEmail: "thihao07@gmail.com",
  //       contractAddress: "23 Nguyễn Hoàng, Đà Nẵng",
  //       contractType: {
  //         id: 5,
  //         name: "Member"
  //       },
  //       flag: 1
  //     },
  //     idService: {
  //       serviceId: 3,
  //       serviceCode: "DV-0003",
  //       serviceName: "Room Twin 01",
  //       serviceImage: "https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg",
  //       serviceArea: 5000,
  //       serviceCost: 1000000,
  //       serviceMaxPeople: 2,
  //       standardRoom: "normal",
  //       descriptionOtherConvenience: "Có tivi",
  //       poolArea: 0,
  //       numberOfFloors: 0,
  //       freeAttachedService: "",
  //       rentType: {
  //         id: 4,
  //         name: "hour",
  //       },
  //       serviceTypeId: 3,
  //       active: 1
  //     },
  //
  //   },
  //   {
  //     contractId: 2,
  //     contractStartDate: "2020-07-14",
  //     contractEndDate: "2020-07-21",
  //     contractDeposit: 200000,
  //     contractTotalMoney: 2000000,
  //     idEmployee: {
  //       employeeId: 7,
  //       employeeName: 'Nguyễn Hữu Hà',
  //       employeeBirthday: '1993-01-01',
  //       employeeIdCard: '534323231',
  //       employeeSalary: 8000000,
  //       employeePhone: '0941234553',
  //       employeeEmail: 'nhh0101@gmail.com',
  //       employeeAddress: '4 Nguyễn Chí Thanh, Huế',
  //       positionId: 2,
  //       educationDegreeId: 3,
  //       divisionId: 2,
  //     },
  //     idContract: {
  //       contractId: 3,
  //       contractCode: "KH-0003",
  //       contractName: "Trương Đình Nghệ",
  //       contractBirthDay: "1990-02-27",
  //       contractGender: 1,
  //       contractCMDD: "488645199",
  //       contractPhone: "0373213122",
  //       contractEmail: "nghenhan2702@gmail.com",
  //       contractAddress: "K323/12 Ông Ích Khiêm, Vinh",
  //       contractType: {
  //         id: 3,
  //         name: "Gold"
  //       },
  //       flag: 1
  //     },
  //     idService: {
  //       serviceId: 1,
  //       serviceCode: "DV-0001",
  //       serviceName: "Villa Beach Front",
  //       serviceImage: "https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg",
  //       serviceArea: 25000,
  //       serviceCost: 10000000,
  //       serviceMaxPeople: 10,
  //       standardRoom: "vip",
  //       descriptionOtherConvenience: "Có hồ bơi",
  //       poolArea: 500,
  //       numberOfFloors: 4,
  //       freeAttachedService: "",
  //       rentType: {
  //         id: 3,
  //         name: "day"
  //       },
  //       serviceTypeId: 1,
  //       active: 1
  //     }
  //   },
  //   {
  //     contractId: 3,
  //     contractStartDate: "2021-03-15",
  //     contractEndDate: "2021-03-17",
  //     contractDeposit: 50000,
  //     contractTotalMoney: 1500000,
  //     idEmployee: {
  //       employeeId: 3,
  //       employeeName: 'Hồ Thị Yến',
  //       employeeBirthday: '1995-12-12',
  //       employeeIdCard: '999231723',
  //       employeeSalary: 14000000,
  //       employeePhone: '0412352315',
  //       employeeEmail: 'thiyen@gmail.com',
  //       employeeAddress: 'K234/11 Điện Biên Phủ, Gia Lai',
  //       positionId: 1,
  //       educationDegreeId: 3,
  //       divisionId: 2,
  //     },
  //     idContract: {
  //       contractId: 4,
  //       contractCode: "KH-0004",
  //       contractName: "Dương Văn Quan",
  //       contractBirthDay: "1981-07-08",
  //       contractGender: 1,
  //       contractCMDD: "543432111",
  //       contractPhone: "0490039241",
  //       contractEmail: "duongquan@gmail.com",
  //       contractAddress: "K453/12 Lê Lợi, Đà Nẵng",
  //       contractType: {
  //         id: 2,
  //         name: "Platinium"
  //       },
  //       flag: 1
  //     },
  //     idService: {
  //       serviceId: 2,
  //       serviceCode: "DV-0002",
  //       serviceName: "House Princess 01",
  //       serviceImage: "https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg",
  //       serviceArea: 14000,
  //       serviceCost: 5000000,
  //       serviceMaxPeople: 7,
  //       standardRoom: "vip",
  //       descriptionOtherConvenience: "Có thêm bếp nướng",
  //       poolArea: 0,
  //       numberOfFloors: 3,
  //       freeAttachedService: "",
  //       rentType: {
  //         id: 2,
  //         name: "month"
  //       },
  //       serviceTypeId: 2,
  //       active: 1
  //     }
  //   },
  //   {
  //     contractId: 4,
  //     contractStartDate: "2021-01-14",
  //     contractEndDate: "2021-01-18",
  //     contractDeposit: 100000,
  //     contractTotalMoney: 1400000,
  //     idEmployee: {
  //       employeeId: 7,
  //       employeeName: 'Nguyễn Hữu Hà',
  //       employeeBirthday: '1993-01-01',
  //       employeeIdCard: '534323231',
  //       employeeSalary: 8000000,
  //       employeePhone: '0941234553',
  //       employeeEmail: 'nhh0101@gmail.com',
  //       employeeAddress: '4 Nguyễn Chí Thanh, Huế',
  //       positionId: 2,
  //       educationDegreeId: 3,
  //       divisionId: 2,
  //     },
  //     idContract: {
  //       contractId: 5,
  //       contractCode: "KH-0005",
  //       contractName: "Hoàng Trần Nhi Nhi",
  //       contractBirthDay: "1995-12-09",
  //       contractGender: 1,
  //       contractCMDD: "795453345",
  //       contractPhone: "0312345678",
  //       contractEmail: "nhinhi123@gmail.com",
  //       contractAddress: "224 Lý Thái Tổ, Gia Lai",
  //       contractType: {
  //         id: 1,
  //         name: "Diamond"
  //       },
  //       flag: 1
  //     },
  //     idService: {
  //       serviceId: 5,
  //       serviceCode: "DV-0005",
  //       serviceName: "House Princess 02",
  //       serviceImage: "https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg",
  //       serviceArea: 10000,
  //       serviceCost: 4000000,
  //       serviceMaxPeople: 5,
  //       standardRoom: "normal",
  //       descriptionOtherConvenience: "Có thêm bếp nướng",
  //       poolArea: 0,
  //       numberOfFloors: 2,
  //       freeAttachedService: "",
  //       rentType: {
  //         id: 3,
  //         name: "day"
  //       },
  //       serviceTypeId: 2,
  //       active: 1
  //     }
  //
  //   },
  //   {
  //     contractId: 5,
  //     contractStartDate: "2021-07-14",
  //     contractEndDate: "2021-07-15",
  //     contractDeposit: 0,
  //     contractTotalMoney: 100000,
  //     idEmployee: {
  //       employeeId: 7,
  //       employeeName: 'Nguyễn Hữu Hà',
  //       employeeBirthday: '1993-01-01',
  //       employeeIdCard: '534323231',
  //       employeeSalary: 8000000,
  //       employeePhone: '0941234553',
  //       employeeEmail: 'nhh0101@gmail.com',
  //       employeeAddress: '4 Nguyễn Chí Thanh, Huế',
  //       positionId: 2,
  //       educationDegreeId: 3,
  //       divisionId: 2
  //     },
  //     idContract: {
  //       contractId: 2,
  //       contractCode: "KH-0002",
  //       contractName: "Phạm Xuân Diệu",
  //       contractBirthDay: "1992-08-08",
  //       contractGender: 1,
  //       contractCMDD: "865342123",
  //       contractPhone: "0954333333",
  //       contractEmail: "xuandieu92@gmail.com",
  //       contractAddress: "K77/22 Thái Phiên, Quảng Trị",
  //       contractType: {
  //         id: 4,
  //         name: "Silver"
  //       },
  //       flag: 1
  //     },
  //     idService: {
  //       serviceId: 6,
  //       serviceCode: "DV-0006",
  //       serviceName: "Room Twin 02",
  //       serviceImage: "https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg",
  //       serviceArea: 3000,
  //       serviceCost: 900000,
  //       serviceMaxPeople: 2,
  //       standardRoom: "normal",
  //       descriptionOtherConvenience: "Có tivi",
  //       poolArea: 0,
  //       numberOfFloors: 0,
  //       freeAttachedService: "",
  //       rentType: {
  //         id: 4,
  //         name: "hour"
  //       },
  //       serviceTypeId: 3,
  //       active: 1
  //     }
  //   }
  // ]
  // getAllContract(){
  //   return this.contracts;
  // }
  //
  // saveContract(contrat: Contract) {
  //   contrat.contractId= this.contracts.length+1;
  //   this.contracts.push(contrat);
  // }

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.apiBaseUrl + '/contract');
  }

  saveContract(contractValue): Observable<Contract> {
    return this.http.post<Contract>(this.apiBaseUrl + '/contract', contractValue);
  }


}

