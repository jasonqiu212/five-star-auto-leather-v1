import React from 'react';

import { Grid, Image, List, Stack, Text, Title } from '@mantine/core';

import styles from './Why.module.scss';

export const Why: React.FC = () => {
  return (
    <Grid gutter={0}>
      <Grid.Col span={{ base: 12, sm: 5 }} order={{ base: 2, sm: 1 }}>
        <Image src="/van.jpg" alt="Van" p={0} />
      </Grid.Col>
      <Grid.Col
        span={{ base: 12, sm: 7 }}
        order={{ base: 1, sm: 2 }}
        py={{ base: 36, sm: 0 }}
        px={{ base: 16, md: 80 }}
      >
        <Stack justify="center" h="100%" gap={0}>
          <Title order={2} className={styles.title}>
            Why You'll Love Us
          </Title>
          <Text mb={8}>
            Committed to your needs, we want you to feel the love that we have for our work. Come
            visit us, and we will show you that we are:
          </Text>
          <List>
            <List.Item>Passionate about what we do</List.Item>
            <List.Item>Creative in our designs</List.Item>
            <List.Item>Quality and service oriented</List.Item>
            <List.Item>Reliable and always delivering the best for your car</List.Item>
          </List>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
