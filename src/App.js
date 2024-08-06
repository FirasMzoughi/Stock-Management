
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import DadhboardAdmin from './pages/Admin/DashboardAdmin';
import AdminProfile from './pages/Admin/AdminProfile';
import AdminProducts from './pages/Admin/AdminProducts';
import AdminUsers from './pages/Admin/AdminUsers';
import AdminSetting from './pages/Admin/AdminSetting';
import AdminReport from './pages/Admin/AdminReport';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admindashboard" element={<DadhboardAdmin />} />
        <Route path="/adminprofile" element={<AdminProfile/>} />
        <Route path="/adminproducts" element={<AdminProducts />} />
        <Route path="/adminusers" element={<AdminUsers/>} />
        <Route path="/adminsettings" element={<AdminSetting/>} />
        <Route path="/adminreports" element={<AdminReport/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
