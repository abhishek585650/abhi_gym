-- Database Creation
CREATE DATABASE IF NOT EXISTS gym_management;
USE gym_management;

-- Users Table Creation
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    age INT,
    gender VARCHAR(10),
    weight_kg DECIMAL(5,2),
    height_cm DECIMAL(5,2),
    membership_tier VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample Data Insertion
INSERT INTO users (full_name, email, phone, age, gender, weight_kg, height_cm, membership_tier)
VALUES 
('John Doe', 'john.doe@example.com', '1234567890', 28, 'male', 75.5, 180.0, 'gold'),
('Jane Smith', 'jane.smith@example.com', '0987654321', 25, 'female', 62.0, 165.0, 'platinum');
