import { Container, List, Text, Title } from '@mantine/core';

export const WhatWeDo: React.FC = () => {
  return (
    <div>
      <Container size="lg" py={60}>
        <Title order={1} mb={30}>
          What We Do
        </Title>

        <Text size="lg" mb={30}>
          We specialize in custom automotive interior services, including:
        </Text>

        <List size="lg" spacing="md">
          <List.Item>Custom Leather Upholstery</List.Item>
          <List.Item>Seat Repairs and Restoration</List.Item>
          <List.Item>Dashboard and Door Panel Refinishing</List.Item>
          <List.Item>Steering Wheel Restoration</List.Item>
          <List.Item>Headliner Replacement</List.Item>
          <List.Item>Custom Interior Design</List.Item>
        </List>

        <Text size="md" mt={30} c="dimmed">
          Every project is handled with meticulous attention to detail and a commitment to
          excellence.
        </Text>
      </Container>
    </div>
  );
};
