import { NavLink } from 'react-router-dom';

import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconAccessibleFilled } from '@tabler/icons-react';

const links = [
  { link: '/our-story', label: 'Our Story' },
  { link: '/what-we-do', label: 'What We Do' },
  { link: '/faq', label: 'FAQ' },
  { link: '/gallery', label: 'Gallery' },
  { link: '/blog', label: 'Blog' },
];

export const Header: React.FC = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      className={({ isActive }) => (isActive ? 'bg-blue-light text-blue-filled' : '')}
    >
      {link.label}
    </NavLink>
  ));

  return (
    <Container size="xl" px={50} h="100%" style={{ display: 'flex', alignItems: 'center' }}>
      <Group justify="space-between" align="center" w="100%">
        <IconAccessibleFilled />
        <Group gap={12} visibleFrom="sm">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Group>
    </Container>
  );
};
