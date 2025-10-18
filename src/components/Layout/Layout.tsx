import React from 'react';

import { Outlet } from 'react-router-dom';

import { AppShell } from '@mantine/core';

import { Footer } from '../Footer';
import { Header } from '../Header';

export const Layout: React.FC = () => {
  return (
    <AppShell header={{ height: 60 }} footer={{ height: 'auto' }} padding="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
};
