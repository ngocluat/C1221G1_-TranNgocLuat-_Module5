package com.example.repository;

import com.example.model.Xe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface ICarRepository extends JpaRepository<Xe, Long> {

    @Transactional
    @Modifying
    @Query(value = "UPDATE car_manager.xe SET `status` = 0 WHERE id = :id", nativeQuery = true)
    void removeCar(@Param("id") Long id);


    @Query(value = "select * from   car_manager.xe where ( ten_nha_xe like :tenNhaXe or  bien_so_xe like :bienSoXe ) and `status` = 1",
            countQuery = "select * from   car_manager.xe where ( ten_nha_xe like :tenNhaXe or  bien_so_xe like :bienSoXe ) and `status` = 1",
            nativeQuery = true)
    Page<Xe> getAllCar(@Param("tenNhaXe") String tenNhaXe, @Param("bienSoXe") String bienSoXe, Pageable pageable);
}
