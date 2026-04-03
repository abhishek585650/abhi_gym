import React, { useState } from 'react';
import axios from 'axios';

const GymForm = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        weight: '',
        height: '',
        membership: ''
    });
    
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // POST request to Java Servlet
            const response = await axios.post('http://localhost:8080/api/register', formData);
            if (response.status === 201 || response.status === 200) {
                setStatus({ type: 'success', message: 'Welcome to the Tribe! Your membership has been successfully activated.' });
                setFormData({ fullname: '', email: '', phone: '', age: '', gender: '', weight: '', height: '', membership: '' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: error.response?.data?.error || 'Failed to register. Is the Java API running?' });
        }
    };

    return (
        <div className="container">
            <form className="gym-pro-form" onSubmit={handleSubmit}>
                <div className="form-header">
                    <h2>Join The Elite</h2>
                    <p>Unlock your true potential today. Fill out your details below.</p>
                </div>
                
                {status.message && (
                    <div className="success-message" style={{ 
                            backgroundColor: status.type === 'error' ? 'rgba(255,51,51,0.1)' : '', 
                            color: status.type === 'error' ? '#ff3333' : '', 
                            borderColor: status.type === 'error' ? 'rgba(255,51,51,0.3)' : '' 
                        }}>
                        {status.message}
                    </div>
                )}

                <div className="input-group">
                    <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required placeholder=" " />
                    <label>Full Name</label>
                </div>

                <div className="input-group">
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder=" " />
                    <label>Email Address</label>
                </div>

                <div className="input-group">
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder=" " />
                    <label>Phone Number</label>
                </div>

                <div className="form-row">
                    <div className="input-group">
                        <input type="number" name="age" value={formData.age} onChange={handleChange} required placeholder=" " />
                        <label>Age</label>
                    </div>
                    <div className="input-group">
                        <select name="gender" value={formData.gender} onChange={handleChange} required>
                            <option value="" disabled></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <label>Gender</label>
                    </div>
                </div>

                <div className="form-row">
                    <div className="input-group">
                        <input type="number" name="weight" value={formData.weight} onChange={handleChange} required placeholder=" " />
                        <label>Weight (kg)</label>
                    </div>
                    <div className="input-group">
                        <input type="number" name="height" value={formData.height} onChange={handleChange} required placeholder=" " />
                        <label>Height (cm)</label>
                    </div>
                </div>

                <div className="input-group">
                    <select name="membership" value={formData.membership} onChange={handleChange} required>
                        <option value="" disabled></option>
                        <option value="silver">Silver Tier (Basic)</option>
                        <option value="gold">Gold Tier (Pro)</option>
                        <option value="platinum">Platinum Tier (Elite)</option>
                    </select>
                    <label>Membership Tier</label>
                </div>

                <button type="submit" className="submit-btn">Begin Journey</button>
            </form>
        </div>
    );
};

export default GymForm;
