package com.example.controller;

import com.example.model.DiemDien;
import com.example.service.IEndPointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class EndPointRestController {


    @Autowired
    IEndPointService iEndPointService;


    @GetMapping("list-end-point")
    public ResponseEntity<List<DiemDien>> getListCar() {
        List<DiemDien> endPoint = iEndPointService.findAll();
        System.err.println(endPoint);
        if (endPoint.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(endPoint, HttpStatus.OK);
    }

}
