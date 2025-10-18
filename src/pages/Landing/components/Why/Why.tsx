import React from 'react';

import { Grid, Image, List, Stack, Text, Title } from '@mantine/core';

export const Why: React.FC = () => {
  return (
    <Grid gutter={0}>
      <Grid.Col span={5}>
        <Image src="/van.jpg" alt="Van" p={0} />
      </Grid.Col>
      <Grid.Col span={7}>
        <Stack justify="center" h="100%" px={80}>
          <Title order={2}>Why You'll Love Us</Title>
          <Text>
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
