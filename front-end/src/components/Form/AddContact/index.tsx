import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerValidation } from '../../../validations/register';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DashboardContext, IContact } from '../../../contexts/DashboardContext';

export interface MyModalProps {
  showModal: boolean;
  onClose: () => void;
}

const FormNewContact = (props: MyModalProps) => {
  const { newContact, setShowModal } = useContext(DashboardContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>({
    resolver: yupResolver(registerValidation),
  });

  return (
    <>
      <div className='mx-auto max-w-screen-lg items-center gap-20 md:flex'>
        <Modal
          className='w-full max-w-xs mx-auto my-12 absolute top-20	left-80'
          show={props.showModal}
          onHide={props.onClose}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className='text-center	block tracking-wide text-gray-700 text-lg font-bold mb-2'>
              Cadastrar contato
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
              onSubmit={handleSubmit(newContact)}
            >
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='name'
                >
                  Nome
                </label>
                <input
                  {...register('name')}
                  type='text'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  placeholder='Nome completo'
                ></input>
                <p className='text-xs text-red-500'>{errors.name?.message}</p>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='phone_number'
                >
                  Celular
                </label>
                <input
                  {...register('phone_number')}
                  type='tel'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  placeholder='DDD + número'
                ></input>
                <p className='text-xs text-red-500'>
                  {errors.phone_number?.message}
                </p>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  {...register('email')}
                  type='email'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  placeholder='exemplo@gmail.com'
                ></input>
                <p className='text-xs text-red-500'>{errors.email?.message}</p>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer className='flex gap-4	justify-center'>
            <Button
              className='bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              variant='secondary'
              onClick={() => setShowModal(false)}
            >
              Fechar
            </Button>
            <Button
              className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              variant='primary'
              type='submit'
            >
              Cadastrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default FormNewContact;
