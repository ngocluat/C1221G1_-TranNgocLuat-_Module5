package com.example.repository;

import com.example.model.DiemDien;
import org.springframework.data.jpa.repository.JpaRepository;

import java.security.acl.LastOwnerException;

public interface IEndPointRepository extends JpaRepository<DiemDien, Long> {
}
