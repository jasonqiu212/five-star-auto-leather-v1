import { useEffect, useState } from 'react';

import { Button, Grid, Image, Stack, Text, Title, Transition } from '@mantine/core';

import { Footer } from '../../components/Footer';

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Stack gap={0}>
      <Grid gutter={0}>
        <Grid.Col span={6}>
          <Image src="/seat.jpg" alt="Five Star Auto Leather" p={0} />
        </Grid.Col>
        <Grid.Col span={6} bg="black">
          <Transition mounted={mounted} transition="fade-up" duration={1000} timingFunction="ease">
            {(style) => (
              <Stack justify="center" h="100%" p={80} gap={0} style={style}>
                <Title order={1} c="white">
                  Five Star Auto Leather
                </Title>

                <Text c="white" mt={8}>
                  Custom Automotive Interiors | Quality Workmanship | Five Star Service since 2005
                </Text>

                <Button w={150} mt={32}>
                  Get in Touch
                </Button>
              </Stack>
            )}
          </Transition>
        </Grid.Col>
      </Grid>
      <Footer />
    </Stack>
  );
};
