// src/pages/Admin/AdminProfile.js
import React, { useState } from 'react';
import './AdminProfile.css';
import AdminNavbar from '../../compents/Navbar/Header';
import profilePicture from '../../assets/firas.jpg';  // Importing the image correctly

const AdminProfile = () => {
  const [name, setName] = useState("Firas Mzoughi");
  const [email, setEmail] = useState("admin@example.com");
  const [role] = useState("Administrator");

  const handleUpdate = (e) => {
    e.preventDefault();
   
    alert(`Profile updated: ${name}, ${email}`);
  };

  return (
    <div className="admin-profile">
      <AdminNavbar />
      <div className="profile-content">
        <h1>Admin Profile</h1>
        <div className="profile-card">
          <div className="profile-details">
            <form onSubmit={handleUpdate}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="role">Role:</label>
                <input type="text" id="role" value={role} disabled />
              </div>
              <button type="submit">Update Profile</button>
            </form>
          </div>
          <div className="profile-picture">
            <img src={profilePicture} alt="Admin Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
