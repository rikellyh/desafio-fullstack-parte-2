import Header from '../Header';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { House, SignOut, UserPlus } from 'phosphor-react';
import FormNewContact from '../Form/AddContact';
import { DashboardContext } from '../../contexts/DashboardContext';

const Sidebar = () => {
  const { userLogout } = useContext(AuthContext);
  const { setShowModal, showModal } = useContext(DashboardContext);

  return (
    <div className='flex'>
      <div className='flex flex-col h-screen p-3 bg-zinc-900 shadow w-60'>
        <div className='space-y-3'>
          <div className='flex items-center'>
            <h2 className='text-xl font-bold text-white'>yContacts</h2>
          </div>
          <div className='flex-1'>
            <ul className='pt-2 pb-4 space-y-1 text-sm'>
              <li className='rounded-sm'>
                <a
                  href='#'
                  className='flex items-center p-2 space-x-3 rounded-md'
                >
                  <House size={20} className='text-indigo-50' />
                  <span className='text-gray-100'>Home</span>
                </a>
              </li>
              <li className='rounded-sm'>
                <button
                  onClick={() => setShowModal(true)}
                  className='flex items-center p-2 space-x-3 rounded-md'
                >
                  <UserPlus size={20} className='text-indigo-50' />
                  <span className='text-gray-100'>Adicionar contato</span>
                </button>
                <FormNewContact
                  showModal={showModal}
                  onClose={() => setShowModal(false)}
                />
              </li>
              <li className='rounded-sm'>
                <Link
                  to={'/'}
                  onClick={() => userLogout()}
                  className='flex items-center p-2 space-x-3 rounded-md'
                >
                  <SignOut size={20} className='text-indigo-50' />
                  <span className='text-gray-100'>Sair</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container mx-auto'>
        <Header />
      </div>
    </div>
  );
};
export default Sidebar;
