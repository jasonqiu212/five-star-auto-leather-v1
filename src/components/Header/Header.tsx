import { NavLink } from 'react-router-dom';

import { Burger, Container, Drawer, Group, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { Logo } from '../Logo';
import styles from './Header.module.scss';

const links = [
  { key: 'our-story', link: '/our-story', label: 'Our Story' },
  { key: 'what-we-do', link: '/what-we-do', label: 'What We Do' },
  { key: 'faq', link: '/faq', label: 'FAQ' },
  { key: 'gallery', link: '/gallery', label: 'Gallery' },
  { key: 'blog', link: '/blog', label: 'Blog' },
];

export const Header: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const items = links.map((link) => (
    <NavLink key={link.key} to={link.link} className={styles.link} onClick={close}>
      {link.label}
    </NavLink>
  ));

  return (
    <>
      <Container size="xl" h="100%" style={{ display: 'flex', alignItems: 'center' }}>
        <Group justify="space-between" align="center" w="100%">
          <Logo />
          <Group gap={16} visibleFrom="xs">
            {items}
          </Group>

          <Burger opened={opened} onClick={open} hiddenFrom="xs" size="sm" />
        </Group>
      </Container>

      <Drawer opened={opened} onClose={close} size="100%" padding="md" zIndex={1000000}>
        <Stack align="end">{items}</Stack>
      </Drawer>
    </>
  );
};
