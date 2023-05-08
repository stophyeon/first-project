package com.example.firstSpring.dao;

import com.example.firstSpring.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.*;

@Repository
public class UserDaoImpl implements UserDao {
    private final String url = "jdbc:mysql://127.0.0.1:3306/first-project";
    private final String user = "root";
    private final String password = "1234";
    private Connection conn;
    private PreparedStatement pstmt;
    private ResultSet rs;
    private Statement stmt;
    @Autowired
    public void UserDaoImpl() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(url, user, password);
            stmt = conn.createStatement();
            System.out.println("MySQL Connection Success!");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public User loginCheck(String username) {
        User user = new User();
        String SQL = "SELECT password FROM customer WHERE username = ?";


        try {
            pstmt = conn.prepareStatement(SQL);

            rs = pstmt.executeQuery();

            user.setUsername(rs.getString("username"));
            user.setPassword(rs.getString("password"));

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return user;
    }}