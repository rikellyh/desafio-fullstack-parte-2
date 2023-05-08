import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

export interface iDefaultContextProps {
  children: React.ReactNode;
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IDashboardContext {
  newContact: (data: IContact) => void;
  updateContact: (data: IContact) => void;
  deletContact: (id: string) => void;
  removeContact: (id: string) => void;
  contact: IContact[];
  setContactId: Dispatch<SetStateAction<string>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
}

export const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext
);

export const DashboardProvider = ({ children }: iDefaultContextProps) => {
  const [contact, setContacts] = useState([] as IContact[]);
  const [contactId, setContactId] = useState('');
  const [showModal, setShowModal] = useState(false);

  const getContact = async () => {
    try {
      const contact = await api.get('contacts');
      setContacts(contact.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('@yContacts:token');
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const user = await api.get('/profile');

        setContacts(user.data.contacts);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const newContact = async (data: IContact) => {
    console.log(data);

    try {
      const response = await api.post('/contacts', data);

      console.log(response);

      toast.success('GG! Contato adicionado com sucesso! ✨');

      setContacts([...contact, response.data]);
    } catch (error) {
      console.log(error);
      toast.error('Parece que não deu certo 😯');
    }
  };

  async function updateContact(data: IContact): Promise<void> {
    try {
      const response = await api.patch(`/contacts/${contactId}`, data);
      console.log(response);
      toast.success('Mudanças salvas o/');
      getContact();
    } catch (error) {
      console.log(error);
      toast.error('Ops! Não foi dessa vez, tente novamente!');
    }
  }

  async function deletContact(id: string) {
    try {
      await api.delete(`/contacts/${id}`);
      toast.success('Contato removido, ok? ✌');
    } catch (error) {
      console.log(error);
    }
  }

  async function removeContact(id: string) {
    await deletContact(id);
    const deletedContact = contact.filter((contacts) => contacts.id !== id);
    setContacts(deletedContact);
  }

  return (
    <DashboardContext.Provider
      value={{
        newContact,
        updateContact,
        deletContact,
        removeContact,
        contact,
        setContactId,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
