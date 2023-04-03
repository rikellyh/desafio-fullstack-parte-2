import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Dashboard from '../pages/Dashboard/Dashboard';
import ProtectedRoutes from '../components/ProtectedRoutes';

const RoutesMain = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
