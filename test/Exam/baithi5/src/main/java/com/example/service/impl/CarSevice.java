package com.example.service.impl;

import com.example.model.Xe;
import com.example.repository.ICarRepository;
import com.example.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarSevice implements ICarService {

    @Autowired
    ICarRepository iCarRepository;


    @Override
    public void save(Xe car) {
        iCarRepository.save(car);
    }

    @Override
    public Xe findById(Long id) {
        return iCarRepository.findById(id).orElse(null);
    }

    @Override
    public void update(Xe car) {

    }

    @Override
    public void remove(Long id) {
        iCarRepository.removeCar(id);
    }

    @Override
    public List<Xe> findAll() {
        return iCarRepository.findAll();
    }

    @Override
    public Page<Xe> findAllPage(Pageable pageable) {
        return iCarRepository.getAllCar(pageable);
    }
}
