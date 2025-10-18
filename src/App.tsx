import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Landing } from './pages/Landing';

function App() {
  return (
    <MantineProvider>
      <Header />
      <Landing />
      <Footer />
    </MantineProvider>
  );
}

export default App;
