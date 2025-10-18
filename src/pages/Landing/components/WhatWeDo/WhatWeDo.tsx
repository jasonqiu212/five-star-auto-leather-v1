import React from 'react';

import { Container, Grid, Image, Stack, Text, Title } from '@mantine/core';

const items = [
  {
    title: 'Upholstery',
    description:
      'We deliver quality car leather seats and interiors at affordable prices. Transform your car with our beautiful handiwork.',
    imageUrl: '/upholstery.jpg',
  },
  {
    title: 'Customization',
    description:
      'Along with a vast range of quality leather, we also offer personalization details such as custom embroidery and bespoke designs.',
    imageUrl: '/customization.jpg',
  },
  {
    title: 'Repair',
    description:
      'Do you have a rip in your car seat, or a sagging roof? Whether it’s time to refresh or restore your car interiors, we are fully dedicated to your needs.',
    imageUrl: '/repair.jpg',
  },
];

export const WhatWeDo: React.FC = () => {
  return (
    <Container size="xl" py="xl">
      <Stack w="100%" align="center" gap={24}>
        <Title order={2}>What We Do</Title>

        <Grid gutter={12}>
          {items.map((item) => (
            <Grid.Col span={{ base: 12, sm: 4 }}>
              <Stack key={item.title} align="center">
                <Image src={item.imageUrl} alt={item.title} w="100%" maw={350} />
                <Title order={3}>{item.title}</Title>
                <Text ta="center">{item.description}</Text>
              </Stack>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};
