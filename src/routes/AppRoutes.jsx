
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import AdminSignup from '../pages/AdminSignup';
import QRSetup from '../pages/QRSetup';
import MFAVerification from '../pages/MFAVerification';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<AdminSignup />} />
      <Route path="/setup-mfa" element={<QRSetup />} />
      <Route path="/verify-mfa" element={<MFAVerification />} />
    </Routes>
  );
};

export default AppRoutes;
