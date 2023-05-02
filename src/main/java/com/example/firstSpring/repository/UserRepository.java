package com.example.firstSpring.repository;

import com.example.firstSpring.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



public interface UserRepository extends JpaRepository<User, Integer> {




}
