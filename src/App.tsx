import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import './App.css';
import { Landing } from './pages/Landing';

function App() {
  return (
    <MantineProvider>
      <Landing />
    </MantineProvider>
  );
}

export default App;
