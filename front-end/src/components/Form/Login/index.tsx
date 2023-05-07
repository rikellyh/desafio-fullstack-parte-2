import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeSlash } from 'phosphor-react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthContext';
import { loginValidation } from '../../../validations/login';

export interface iLoginFormData {
  email: string;
  password: string;
}

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginApi } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<iLoginFormData>({
    resolver: yupResolver(loginValidation),
  });

  const submit: SubmitHandler<iLoginFormData> = (data) => {
    loginApi(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submit)}
        className='bg-white shadow-md rounded w-80 p-4'
      >
        <div className='text-center mb-4'>
          <h1 className='block tracking-wide text-gray-700 text-xl font-bold mb-2'>
            yContacts
          </h1>
          <span className='font-bold text-base'>Login</span>
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='email'
          >
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Seu email'
            {...register('email')}
          ></input>
          <p className='text-xs text-red-500'>{errors.email?.message}</p>
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='password'
          >
            Senha
          </label>
          <div className='flex'>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type={showPassword ? 'text' : 'password'}
              placeholder='Sua senha'
              {...register('password')}
            ></input>
            <button
              type='button'
              className='ml-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeSlash width={20} height={20} />
              ) : (
                <Eye width={20} height={20} />
              )}
            </button>
          </div>
          {!showPassword}
          <p className='text-xs text-red-500'>{errors.password?.message}</p>
        </div>
        <div className='flex items-center justify-between mt-5'>
          <button
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </button>
          <Link
            className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-600'
            to={'/profile'}
          >
            Ainda não possui uma conta?
          </Link>
        </div>
      </form>
    </>
  );
};

export default FormLogin;
