import { AppProvider } from './AppProvider';
import { AppRouter } from './AppRouter';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};
