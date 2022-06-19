import {Employee} from "./Employee";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class EmployeeService {

  private employees: Employee[] = [
    {
      employeeId: 1,
      employeeName: 'Nguyễn Văn An',
      employeeBirthday: '1970-11-07',
      employeeIdCard: '456231786',
      employeeSalary: 10000000,
      employeePhone: '0901234121',
      employeeEmail: 'annguyen@gmail.com',
      employeeAddress: '295 Nguyễn Tất Thành, Đà Nẵng',
      positionId: 1,
      educationDegreeId: 3,
      divisionId: 1,
    },
    {
      employeeId: 2,
      employeeName: 'Lê Văn Bình',
      employeeBirthday: '1997-04-09',
      employeeIdCard: '654231234',
      employeeSalary: 7000000,
      employeePhone: '0934212314',
      employeeEmail: 'binhlv@gmail.com',
      employeeAddress: '22 Yên Bái, Đà Nẵng',
      positionId: 1,
      educationDegreeId: 2,
      divisionId: 2,
    },
    {
      employeeId: 3,
      employeeName: 'Hồ Thị Yến',
      employeeBirthday: '1995-12-12',
      employeeIdCard: '999231723',
      employeeSalary: 14000000,
      employeePhone: '0412352315',
      employeeEmail: 'thiyen@gmail.com',
      employeeAddress: 'K234/11 Điện Biên Phủ, Gia Lai',
      positionId: 1,
      educationDegreeId: 3,
      divisionId: 2,
    },
    {
      employeeId: 4,
      employeeName: 'Võ Công Toản',
      employeeBirthday: '1980-04-04',
      employeeIdCard: '123231365',
      employeeSalary: 17000000,
      employeePhone: '0374443232',
      employeeEmail: 'toan0404@gmail.com',
      employeeAddress: '77 Hoàng Diệu, Quảng Trị',
      positionId: 1,
      educationDegreeId: 4,
      divisionId: 4,
    },
    {
      employeeId: 5,
      employeeName: 'Nguyễn Bỉnh Phát',
      employeeBirthday: '1999-12-09',
      employeeIdCard: '454363232',
      employeeSalary: 6000000,
      employeePhone: '0902341231',
      employeeEmail: 'phatphat@gmail.com',
      employeeAddress: '43 Yên Bái, Đà Nẵng',
      positionId: 2,
      educationDegreeId: 1,
      divisionId: 1,
    },
    {
      employeeId: 6,
      employeeName: 'Khúc Nguyễn An Nghi',
      employeeBirthday: '2000-11-08',
      employeeIdCard: '964542311',
      employeeSalary: 7000000,
      employeePhone: '0978653213',
      employeeEmail: 'annghi20@gmail.com',
      employeeAddress: '294 Nguyễn Tất Thành, Đà Nẵng',
      positionId: 2,
      educationDegreeId: 2,
      divisionId: 3,
    },
    {
      employeeId: 7,
      employeeName: 'Nguyễn Hữu Hà',
      employeeBirthday: '1993-01-01',
      employeeIdCard: '534323231',
      employeeSalary: 8000000,
      employeePhone: '0941234553',
      employeeEmail: 'nhh0101@gmail.com',
      employeeAddress: '4 Nguyễn Chí Thanh, Huế',
      positionId: 2,
      educationDegreeId: 3,
      divisionId: 2,
    }
  ]

  getEmployees() {
    return this.employees;
  }
}
