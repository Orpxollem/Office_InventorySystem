import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import Inventory from './pages/Inventory';
import Reports from './pages/Reports';
import Database from './pages/Database';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/usermanagement" element={<UserManagement />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/database" element={<Database />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
