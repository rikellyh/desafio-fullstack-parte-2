import { createContext, useEffect, useState, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../services/api';
import { IContact } from './DashboardContext';
import { iLoginFormData } from '../pages/Login/Login';
import { iRegisterFormData } from '../pages/Home/Home';

interface IUserProviderProps {
  children: ReactNode;
}
export interface iUser {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  contacts: IContact;
}

interface IUserContextData {
  user: iUser | null;
  loginApi: (data: iLoginFormData) => void;
  userLogout: () => void;
  registerApi: (data: iRegisterFormData) => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<IUserContextData>(
  {} as IUserContextData
);

export const AuthProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(false);
  const backPage = useNavigate();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('@yContacts:token');

      if (token) {
        setLoading(true);
        try {
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          const { data } = await api.get(`/profile`);

          setUser(data);
        } catch (error) {
          localStorage.clear();
          backPage('/');
        } finally {
          setLoading(false);
        }
      }
    })();
  }, []);

  const registerApi = async (data: iRegisterFormData) => {
    try {
      await api.post('/profile', data);
      toast.success('Cadastro efetuado com sucesso! 🤩');
    } catch (error) {
      toast.error('Ops! Algo deu errado 👀', {
        toastId: 1,
      });
    } finally {
      setLoading(false);
    }
  };

  const loginApi = async (data: iLoginFormData) => {
    try {
      setLoading(true);

      const response = await api.post('/login', data);
      const { user: userResponse, token } = response.data;
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setUser(userResponse);

      localStorage.setItem('@yContacts:token', token);
      const toNavigate = location.state?.from?.pathname || 'dashboard';
      backPage(toNavigate, { replace: true });
      localStorage.setItem('@yContacts:user', JSON.stringify(userResponse.id));
    } catch (error) {
      toast.error(
        'Você não tem permissão para acessar este tipo de recurso ✋'
      );
    } finally {
      setLoading(false);
    }
  };

  const userLogout = (): void => {
    setUser(null);
    localStorage.clear();
    backPage('/');
  };

  return (
    <AuthContext.Provider
      value={{ loginApi, registerApi, loading, user, userLogout, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
