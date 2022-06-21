package com.example.service.impl;

import com.example.model.DiemDi;
import com.example.repository.IStartPointRepository;
import com.example.service.IStartPointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class StartPointService  implements IStartPointService {

    @Autowired
    IStartPointRepository iStartPointRepository;

    @Override
    public List<DiemDi> findAll() {
        return iStartPointRepository.findAll();
    }
}
