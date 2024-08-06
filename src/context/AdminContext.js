// src/context/AdminContext.js
import React, { createContext, useState } from 'react';

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [adminName, setAdminName] = useState("Firas Mzoughi");
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Manager" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Sales Staff" },
    // Add more initial users here
  ]);

  return (
    <AdminContext.Provider value={{ adminName, setAdminName, users, setUsers }}>
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContext, AdminProvider };
