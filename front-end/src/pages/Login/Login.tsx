import background from '../../assets/background-login.jpg';
import FormLogin from '../../components/Form/Login';

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
          <FormLogin />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
