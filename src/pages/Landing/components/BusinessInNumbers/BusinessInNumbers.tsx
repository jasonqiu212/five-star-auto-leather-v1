import React from 'react';

import { Box, Container, Grid, Stack, Text, Title } from '@mantine/core';

import styles from './BusinessInNumbers.module.scss';

const items = [
  {
    statistic: '18',
    description: 'years in business',
  },
  {
    statistic: '21',
    description: 'years in business',
  },
  {
    statistic: '100%',
    description: 'satisfied customers',
  },
];

export const BusinessInNumbers: React.FC = () => {
  return (
    <Box className={styles.wrapper}>
      <Box className={styles.overlay} />

      <Container size="xl" py={54} className={styles.content}>
        <Stack w="100%" align="center" gap={24}>
          <Title order={2} c="white">
            Our Business in Numbers
          </Title>

          <Grid gutter={12} w="100%">
            {items.map((item, index) => (
              <Grid.Col span={4} key={index}>
                <Stack align="center" gap={0}>
                  <Text fz={{ base: 24, sm: 48 }} fw={700} c="white">
                    {item.statistic}
                  </Text>
                  <Text c="white">{item.description}</Text>
                </Stack>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};
