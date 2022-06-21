package com.example.model;

import javax.persistence.*;

@Entity
public class Xe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
    private  String bienSoXe;
    private  String loaiXe;
    private  String tenNhaXe;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private DiemDi diemDi;

    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private DiemDien diemDien;

    private String soDienThoaiNhaXe;
    private String email;
    private  String gioKhoiHanh;
    private  Integer status;

    public Xe() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBienSoXe() {
        return bienSoXe;
    }

    public void setBienSoXe(String bienSoXe) {
        this.bienSoXe = bienSoXe;
    }

    public String getLoaiXe() {
        return loaiXe;
    }

    public void setLoaiXe(String loaiXe) {
        this.loaiXe = loaiXe;
    }

    public String getTenNhaXe() {
        return tenNhaXe;
    }

    public void setTenNhaXe(String tenNhaXe) {
        this.tenNhaXe = tenNhaXe;
    }

    public DiemDi getDiemDi() {
        return diemDi;
    }

    public void setDiemDi(DiemDi diemDi) {
        this.diemDi = diemDi;
    }

    public DiemDien getDiemDien() {
        return diemDien;
    }

    public void setDiemDien(DiemDien diemDien) {
        this.diemDien = diemDien;
    }

    public String getSoDienThoaiNhaXe() {
        return soDienThoaiNhaXe;
    }

    public void setSoDienThoaiNhaXe(String soDienThoaiNhaXe) {
        this.soDienThoaiNhaXe = soDienThoaiNhaXe;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGioKhoiHanh() {
        return gioKhoiHanh;
    }

    public void setGioKhoiHanh(String gioKhoiHanh) {
        this.gioKhoiHanh = gioKhoiHanh;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}
