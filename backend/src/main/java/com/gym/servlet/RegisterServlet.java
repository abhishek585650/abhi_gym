package com.gym.servlet;

import com.google.gson.Gson;
import com.gym.model.User;
import com.gym.util.DBConnection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@WebServlet("/api/register")
public class RegisterServlet extends HttpServlet {
    private Gson gson = new Gson();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        
        try {
            // 1. Read JSON from request
            BufferedReader reader = request.getReader();
            User user = gson.fromJson(reader, User.class);
            
            if (user == null || user.getEmail() == null) {
                response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                out.print("{\"error\": \"Invalid input data\"}");
                return;
            }

            // 2. Insert into Database
            boolean success = registerUserInDB(user);
            
            if (success) {
                response.setStatus(HttpServletResponse.SC_CREATED);
                out.print("{\"message\": \"User successfully registered!\", \"success\": true}");
            } else {
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                out.print("{\"error\": \"Failed to register user (Email might already exist)\"}");
            }
            
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            out.print("{\"error\": \"" + e.getMessage() + "\"}");
        }
    }

    private boolean registerUserInDB(User u) throws SQLException, ClassNotFoundException {
        String query = "INSERT INTO users (full_name, email, phone, age, gender, weight_kg, height_cm, membership_tier) " +
                       "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement stmt = conn.prepareStatement(query)) {
             
             stmt.setString(1, u.getFullname());
             stmt.setString(2, u.getEmail());
             stmt.setString(3, u.getPhone());
             stmt.setInt(4, u.getAge());
             stmt.setString(5, u.getGender());
             stmt.setDouble(6, u.getWeight());
             stmt.setDouble(7, u.getHeight());
             stmt.setString(8, u.getMembership());
             
             int rowsAffected = stmt.executeUpdate();
             return rowsAffected > 0;
        }
    }
}
