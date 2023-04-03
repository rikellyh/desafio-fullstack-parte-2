import FormRegister from '../../components/Form';
export interface iRegisterFormData {
  name: string;
  email: string;
  password: string;
  phone_number: string;
}

const Home = () => {
  return (
    <>
      <FormRegister />
    </>
  );
};

export default Home;
