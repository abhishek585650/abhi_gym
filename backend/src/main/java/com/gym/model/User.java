package com.gym.model;

public class User {
    private int id;
    private String fullname;
    private String email;
    private String phone;
    private int age;
    private String gender;
    private double weight;
    private double height;
    private String membership;

    // Getters
    public int getId() { return id; }
    public String getFullname() { return fullname; }
    public String getEmail() { return email; }
    public String getPhone() { return phone; }
    public int getAge() { return age; }
    public String getGender() { return gender; }
    public double getWeight() { return weight; }
    public double getHeight() { return height; }
    public String getMembership() { return membership; }

    // Setters
    public void setId(int id) { this.id = id; }
    public void setFullname(String fullname) { this.fullname = fullname; }
    public void setEmail(String email) { this.email = email; }
    public void setPhone(String phone) { this.phone = phone; }
    public void setAge(int age) { this.age = age; }
    public void setGender(String gender) { this.gender = gender; }
    public void setWeight(double weight) { this.weight = weight; }
    public void setHeight(double height) { this.height = height; }
    public void setMembership(String membership) { this.membership = membership; }
}
