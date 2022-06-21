package com.example.service.impl;

import com.example.model.DiemDien;
import com.example.repository.IEndPointRepository;
import com.example.service.IEndPointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EndPointService implements IEndPointService {

    @Autowired
    IEndPointRepository iEndPointRepository;

    @Override
    public List<DiemDien> findAll() {
        return iEndPointRepository.findAll();
    }
}
