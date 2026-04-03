import React from 'react';
import GymForm from './components/GymForm';
import './index.css'; // Inheriting our custom CSS logic

function App() {
  return (
    <>
      <header className="navbar">
        <div className="nav-container">
            <div className="logo">FIT<span>CORE</span></div>
            <nav className="nav-links">
                <a href="#">Home</a>
                <a href="#">Programs</a>
                <a href="#">Trainers</a>
                <a href="#">Membership</a>
                <a href="#" className="nav-btn">Sign In</a>
            </nav>
        </div>
      </header>

      <main className="main-content">
        <GymForm />
      </main>

      <footer className="footer">
        <div className="footer-content">
            <div className="logo">FIT<span>CORE</span></div>
            <p>&copy; 2026 FitCore Gym. All rights reserved.</p>
            <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
      </footer>
    </>
  );
}

export default App;
