package com.example.service;

import com.example.model.Xe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICarService {

    void save(Xe customer);

    Xe findById(Long id);

    void update(Xe customer);

    void remove(Long id );

    List<Xe> findAll();

    Page<Xe> findAllPage(String tenNhaXe, String bienSoXe, Pageable pageable);

}
