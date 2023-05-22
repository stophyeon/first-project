package com.example.firstSpring.Repository;

import com.example.firstSpring.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u WHERE u.userid = :userid")
    User findByUserid(@Param("userid") String userid);
    /*
    @Query("SELECT u.password FROM User u WHERE u.userid = :userid")
    User findPasswordByUserId(@Param("userid") User userId);
    */
    }

