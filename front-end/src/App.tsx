import Providers from './contexts/Providers';
import RoutesMain from './routes';

function App() {
  return (
    <>
      <Providers>
        <RoutesMain />
      </Providers>
    </>
  );
}

export default App;
