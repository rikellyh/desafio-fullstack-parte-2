import { Link } from 'react-router-dom';
import background from '../../assets/background-login.jpg';

export interface iLoginFormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const imgConfigs = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      <div className='h-screen' style={imgConfigs}>
        <div className='w-full max-w-xs mx-auto pt-40'>
          <form className='bg-white shadow-md rounded w-80 h-80 p-4'>
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
              ></input>
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='password'
              >
                Senha
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Sua senha'
              ></input>
            </div>
            <div className='flex items-center justify-between mt-5'>
              <button
                className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='button'
              >
                Entrar
              </button>
              <Link
                className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-600'
                to={'/'}
              >
                Ainda não possui uma conta?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
