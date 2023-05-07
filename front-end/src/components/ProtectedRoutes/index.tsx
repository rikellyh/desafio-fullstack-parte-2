import { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const ProtectedRoutes = () => {
  const { setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const token = localStorage.getItem('@yContacts:token');

  if (!token) {
    const pathname = window.location.pathname;
    if (pathname !== '/') {
      setLoading(true);
    }
    navigate('/');
  }

  return <>{token && <Outlet />}</>;
};

export default ProtectedRoutes;
