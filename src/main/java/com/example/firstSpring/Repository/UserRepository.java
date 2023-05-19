package com.example.firstSpring.Repository;

import com.example.firstSpring.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);

    @Override
    Optional<User> findById(Long aLong);
    //public User loginCheck(String username);
    }
