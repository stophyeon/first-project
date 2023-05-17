package com.example.firstSpring.DAO;

import com.example.firstSpring.DTO.UserDTO;
import com.example.firstSpring.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.*;
@Repository
public class UserDAOImpl implements UserDAO{
    private final String url = "jdbc:mysql://127.0.0.1:3306/weatheria";
    private final String user = "root";
    private final String password = "990531";
    private Connection conn;
    private PreparedStatement pstmt;
    private ResultSet rs;
    private Statement stmt;

    @Autowired(required = true)
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
    public boolean login(UserDTO userDto) {
        boolean result = false;

        try {

            // 입력된 아이디와 패스워드를 이용하여 쿼리를 생성
            String sql = "SELECT COUNT(*) FROM users WHERE user_id = ? AND password = ?";
            pstmt=conn.prepareStatement(sql);
            pstmt.setString(1, userDto.getUserid());
            pstmt.setString(2, userDto.getPassword());

            // 쿼리 실행
            rs = pstmt.executeQuery();
            rs.next();
            int count = rs.getInt(1);

            // 검색 결과가 1이면 로그인 성공
            if (count == 1) {
                result = true;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return result;
    }
    @Override
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
