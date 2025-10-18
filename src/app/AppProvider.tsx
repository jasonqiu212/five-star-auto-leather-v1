import React from 'react';

import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <MantineProvider>{children}</MantineProvider>;
};
