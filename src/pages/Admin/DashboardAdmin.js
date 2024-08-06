// src/pages/Admin/DashboardAdmin.js
import React from 'react';
import './Dashboard.css';
import AdminNavbar from '../../compents/Navbar/Header';

const DashboardAdmin = () => {
  return (
    <div className="dashboard-admin">
      <AdminNavbar />
      <div className="dashboard-content">
        <h1>Welcome to Admin Dashboard</h1>
        <div className="stats-cards">
          <div className="stats-card">
            <h2>Total Products</h2>
            <p>150</p>
          </div>
          <div className="stats-card">
            <h2>Total Orders</h2>
            <p>300</p>
          </div>
          <div className="stats-card">
            <h2>Pending Orders</h2>
            <p>25</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
