package com.example.service;

import com.example.model.Employee;
import com.example.repository.EmployeeREpository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EmployeeSevice  implements IEmployeeService{

    @Autowired
    EmployeeREpository employeeREpository;
    @Override
    public List<Employee> listEmployeeList() {
        return employeeREpository.findAll();
    }
}
