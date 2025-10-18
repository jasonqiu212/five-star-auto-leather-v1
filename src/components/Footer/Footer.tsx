import { ActionIcon, Container, Grid, Group, Text, Title } from '@mantine/core';
import { IconAccessibleFilled, IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <Container size="xl" py="md" px={50}>
      <Grid>
        <Grid.Col span={{ base: 12, sm: 4 }}>
          <IconAccessibleFilled />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 8 }}>
          <Grid gutter={16}>
            <Grid.Col span={6}>
              <Title order={3} className={styles.sectionTitle}>
                Visit Us
              </Title>
              <Text size="sm">10 Ang Mo Kio Industrial Park 2A</Text>
              <Text size="sm">#05-05 AMK AutoPoint</Text>
              <Text size="sm">Singapore 568047</Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Title order={3} className={styles.sectionTitle}>
                Opening Hours
              </Title>
              <Text size="sm">Monday-Friday: 9am-6pm</Text>
              <Text size="sm">Saturday: 9am-12pm</Text>
              <Text size="sm">Sunday & Public Holidays: Closed</Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Title order={3} className={styles.sectionTitle}>
                Contact Us
              </Title>
              <Text size="sm">
                <Text component="a" href="tel:91729570">
                  9172 9570
                </Text>{' '}
                /{' '}
                <Text component="a" href="tel:87909677">
                  8790 9677
                </Text>
              </Text>
              <Text size="sm" component="a" href="mailto:sales@fivestarautoleather.com">
                sales@fivestarautoleather.com
              </Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Title order={3} className={styles.sectionTitle}>
                Follow Us
              </Title>
              <Group gap={8} align="center">
                <ActionIcon
                  variant="transparent"
                  color="gray"
                  component="a"
                  href="https://www.facebook.com/fivestarautoleather/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandFacebook stroke={1.5} />
                </ActionIcon>
                <ActionIcon
                  variant="transparent"
                  color="gray"
                  component="a"
                  href="https://www.instagram.com/fivestarautoleather/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandInstagram stroke={1.5} />
                </ActionIcon>
                {/* <ActionIcon variant="transparent" color="gray" component="a" href="/youtube">
                  <IconBrandInstagram stroke={1.5} />
                </ActionIcon> */}
              </Group>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>

      <Text c="dimmed" size="sm" mt="xl" ta="center">
        © {new Date().getFullYear()} Five Star Auto Leather. All rights reserved.
      </Text>
    </Container>
  );
};
