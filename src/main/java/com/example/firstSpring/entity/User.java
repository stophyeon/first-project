package com.example.firstSpring.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity

public class User {
    @Id
    private Integer id;
    private String email;
    private String password;


}
