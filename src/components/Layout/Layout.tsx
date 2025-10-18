import React from 'react';

import { Outlet } from 'react-router-dom';

import { AppShell } from '@mantine/core';

import { Header } from '../Header';

export const Layout: React.FC = () => {
  return (
    <AppShell header={{ height: 60 }} footer={{ height: 'auto' }} padding="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main px={0} pt={59}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
