package com.example.controller;

import com.example.model.DiemDi;
import com.example.service.IStartPointService;
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
public class StartPointRestController {


    @Autowired
    IStartPointService iStartPointService;


    @GetMapping("list-start-point")
    public ResponseEntity<List<DiemDi>> getListCar() {
        List<DiemDi> startPoint = iStartPointService.findAll();
        System.err.println(startPoint);
        if (startPoint.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(startPoint, HttpStatus.OK);
    }

}
