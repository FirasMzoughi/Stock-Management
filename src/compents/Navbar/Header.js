import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';
import { FiMenu, FiHome, FiUser, FiClipboard, FiSettings, FiSearch, FiLogOut, FiUsers } from 'react-icons/fi';

const AdminNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const adminName = "Firas Mzoughi";

  return (
    <div className="navbar-container">
      <header className="admin-header">
        <div className="left-section">
          <div className="menu-icon" onClick={toggleSidebar}>
            <FiMenu size={30} />
          </div>
          <div className="logo">
            <img src={logo} alt="Admin Logo" />
          </div>
        </div>
        <div className="right-section">
          <div className="search-bar">
            <FiSearch size={20} />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="admin-info">
            <span className="admin-name">{adminName}</span>
          </div>
        </div>
      </header>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <nav className="sidebar-links">
          <Link
            to="/admindashboard"
            className={location.pathname === '/admindashboard' ? 'active' : ''}
          >
            <FiHome size={20} /><span>Dashboard</span>
          </Link>
          <Link
            to="/adminprofile"
            className={location.pathname === '/adminprofile' ? 'active' : ''}
          >
            <FiUser size={20} /><span>Profile</span>
          </Link>
          <Link
            to="/adminproducts"
            className={location.pathname === '/adminproducts' ? 'active' : ''}
          >
            <FiClipboard size={20} /><span>Products</span>
          </Link>
          <Link
            to="/adminusers"
            className={location.pathname === '/adminusers' ? 'active' : ''}
          >
            <FiUsers size={20} /><span>User Management</span>
          </Link>
          <Link
            to="/adminsettings"
            className={location.pathname === '/adminsettings' ? 'active' : ''}
          >
            <FiSettings size={20} /><span>Settings</span>
          </Link>
          <Link
            to="/adminreports"
            className={location.pathname === '/adminreports' ? 'active' : ''}
          >
            <FiClipboard size={20} /><span>Reports</span>
          </Link>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            <FiLogOut size={20} /><span>Logout</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default AdminNavbar;
