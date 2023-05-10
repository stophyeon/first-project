package com.example.firstSpring.DAO;

import com.example.firstSpring.DTO.UserDTO;
import com.example.firstSpring.entity.User;
import org.springframework.beans.factory.annotation.Autowired;

import java.sql.*;

public class UserDAOImpl implements UserDAO{
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


    public User loginCheck(String userid) {
        User user = new User();
        String SQL = "SELECT password FROM customer WHERE userid = ?";


        try {
            pstmt = conn.prepareStatement(SQL);
            pstmt.setString(1,userid);
            rs = pstmt.executeQuery();
            user.UserUpdate(rs.getString(1),rs.getString(2),rs.getString(3));

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return user;
    }


    public boolean insertUser(UserDTO dto) {
        boolean result = false;
        String sql = "INSERT INTO TBL_USER values(?, ?, ?, ?, ?)";
        int count = 0;

        try {
            conn = java.sql.DriverManager.getConnection(sql);
            pstmt = conn.prepareStatement(sql);


            pstmt.setString(1, dto.getUserid());
            pstmt.setString(2, dto.getPassword());
            pstmt.setString(3, dto.getEmail());
            pstmt.setString(4, dto.getName());
            pstmt.setString(5, dto.getPhoneNum());

            count = pstmt.executeUpdate();
            pstmt.close();

        } catch (SQLException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }

        if(count != 0) {
            System.out.println("회원가입 성공");
            result = true;
        }else {
            System.out.println("회원가입 실패");
            result = false;
        }
        return result;
    }
}
