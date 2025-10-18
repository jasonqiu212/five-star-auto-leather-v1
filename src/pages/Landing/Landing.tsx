import { useEffect, useState } from 'react';

import { Button, Grid, Image, Stack, Text, Title, Transition } from '@mantine/core';

import { Footer } from '../../components/Footer';
import styles from './Landing.module.scss';

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Stack gap={0}>
      <Grid gutter={0}>
        <Grid.Col span={{ base: 12, sm: 6 }} order={{ base: 2, sm: 1 }}>
          <Image src="/seat.jpg" alt="Five Star Auto Leather" p={0} />
        </Grid.Col>
        <Grid.Col
          bg="black"
          span={{ base: 12, sm: 6 }}
          order={{ base: 1, sm: 2 }}
          py={{ base: 36, sm: 0 }}
        >
          <Transition mounted={mounted} transition="fade-up" duration={1000} timingFunction="ease">
            {(style) => (
              <Stack gap={0} className={styles.textContainer} style={style}>
                <Title order={1} c="white">
                  Five Star Auto Leather
                </Title>

                <Text c="white" mt={8}>
                  Custom Automotive Interiors | Quality Workmanship | Five Star Service since 2005
                </Text>

                <Button w={150} mt={32} component="a" href="#contact">
                  Get in Touch
                </Button>
              </Stack>
            )}
          </Transition>
        </Grid.Col>
      </Grid>
      <div id="contact">
        <Footer />
      </div>
    </Stack>
  );
};
