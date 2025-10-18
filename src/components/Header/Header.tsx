import { NavLink } from 'react-router-dom';

import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from './Header.module.scss';

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
      className={({ isActive }) => (isActive ? classes.active : '')}
    >
      {link.label}
    </NavLink>
  ));

  return (
    <Container size="xl" h="100%" style={{ display: 'flex', alignItems: 'center' }}>
      {/* <MantineLogo size={28} /> */}
      <Group gap={5} visibleFrom="xs">
        {items}
      </Group>

      <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
    </Container>
  );
};
