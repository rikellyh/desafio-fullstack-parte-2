import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Dashboard from '../pages/Dashboard/Dashboard';
import ProtectedRoutes from '../components/ProtectedRoutes';

const RoutesMain = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path='/profile' element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
