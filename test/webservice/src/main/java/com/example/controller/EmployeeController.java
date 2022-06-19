package com.example.controller;

import com.example.model.Employee;
import com.example.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
// ngăn cản sự bảo vệ
@RequestMapping("/rest-employee")
@RestController
public class EmployeeController {

    @Autowired
    IEmployeeService iEmployeeService;

    @GetMapping("/list")
    public ResponseEntity<List<Employee>> getListPost() {
        List<Employee> posts = iEmployeeService.listEmployeeList();
        if (posts.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }


}
