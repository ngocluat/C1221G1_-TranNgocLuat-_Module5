package com.example.controller;

import com.example.model.Xe;
import com.example.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class CarRestController {


    @Autowired
    ICarService iCarService;

        // ok
        @GetMapping("page-car")
        public ResponseEntity<Page<Xe>> getPageCar(@RequestParam Optional<String> bienSoXe,
                                                   @RequestParam Optional<String> tenNhaXe,
                                                   @RequestParam(defaultValue = "0") int page,
                                                   @RequestParam(defaultValue = "6") Integer pageSize,
                                                   @RequestParam Optional<String> sort,
                                                   @RequestParam Optional<String> dir
        ) {

            Pageable pageable;
            String sortVal = sort.orElse("");
            String dirVal = dir.orElse("");
            if ("".equals(sortVal)) {
                pageable = PageRequest.of(page, pageSize);
            } else {
                if (dir.equals("asc")) {
                    pageable = PageRequest.of(page, pageSize, Sort.by(sortVal).ascending());
                } else {
                    pageable = PageRequest.of(page, pageSize, Sort.by(sortVal).descending());
                }
            }

            String valueNhaXe = tenNhaXe.orElse("");
            String valueBienSo = bienSoXe.orElse("");
            System.err.println("valueSearchqqqq");

            Page<Xe> allPageCar = iCarService.findAllPage(valueBienSo, valueNhaXe, pageable);
            if (!allPageCar.hasContent()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(allPageCar, HttpStatus.OK);
        }

    // ok
    @GetMapping("car-id/{id}")
    public ResponseEntity<Xe> getCar(@PathVariable("id") Long id) {
        Xe car = iCarService.findById(id);
        System.err.println("ID");
        System.err.println(car);
        if (car == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(car, HttpStatus.OK);
    }

    // ok
    @PatchMapping("/delete-car/{id}")
    public ResponseEntity<Xe> deleteCar(@PathVariable("id") Long id) {
        try {
            System.err.println("sghuiygyuiwgsyigwg8tyuguygfuiy");
            this.iCarService.remove(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // ok
    @PostMapping("/save-car")
    public ResponseEntity<?> saveCar(@RequestBody Xe XeValue) {
        XeValue.setStatus(1);
        System.err.println("SAVE");
        System.err.println(XeValue);
        iCarService.save(XeValue);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // ok
    @PatchMapping("/update-car/{id}")
    public ResponseEntity<?> updateCar(@RequestBody Xe XeValue) {
        System.err.println("UPDATE 54++4+4+94+4+4+4");
        System.err.println(XeValue.getStatus());
        iCarService.save(XeValue);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}



