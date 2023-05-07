import { ToastContainer } from 'react-toastify';
import Providers from './contexts/Providers';
import RoutesMain from './routes';

function App() {
  return (
    <>
      <Providers>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
        <RoutesMain />
      </Providers>
    </>
  );
}

export default App;
