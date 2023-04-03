import imageHome from '../../assets/img-desktop.jpg';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { iRegisterFormData } from '../../pages/Home/Home';
import { registerValidation } from '../../validations/register';

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { registerApi } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(registerValidation),
  });

  return (
    <>
      <div className='mx-auto max-w-screen-lg items-center gap-20 md:flex'>
        <img src={imageHome} className='hidden md:block md:w-96'></img>
        <div className='w-full max-w-xs mx-auto my-12'>
          <form
            onSubmit={handleSubmit(registerApi)}
            className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
          >
            <div className='text-center mb-4'>
              <h1 className='block tracking-wide text-gray-700 text-lg font-bold mb-2'>
                Cadastre-se!
              </h1>
              <span className='font-bold text-sm'>É fácil e grátis ✨</span>
            </div>
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
              <p>{errors.name?.message}</p>
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='password'
              >
                Senha
              </label>
              <button
                type='button'
                className='ml-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 12l2-2m0 0l4-4m-4 4v4m0 4l4-4m-4 4H4m16-8a8 8 0 11-16 0 8 8 0 0116 0z'
                    />
                  </svg>
                ) : (
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 16l-4-4m0 0l4-4m-4 4h12'
                    />
                  </svg>
                )}
              </button>
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                name='password'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='*******'
              />
              <p>{errors.password?.message}</p>
              {!showPassword && (
                <div className='text-xs text-gray-500 mt-1'>
                  Clique no ícone para mostrar sua senha
                </div>
              )}
            </div>
            <div className='mb-4'>
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
              <p>{errors.phone_number?.message}</p>
            </div>
            <div className='mb-4'>
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
              <p>{errors.email?.message}</p>
              <div className='flex items-center justify-between mt-5'>
                <button
                  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  type='button'
                >
                  Enviar
                </button>
                <Link
                  className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-600'
                  to={'/login'}
                >
                  Já possui uma conta?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormRegister;
