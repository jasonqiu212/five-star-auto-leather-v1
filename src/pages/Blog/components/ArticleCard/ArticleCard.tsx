import React from 'react';

import { Card, Group, Image, Stack, Text, Title } from '@mantine/core';
import { IconCalendar, IconClock } from '@tabler/icons-react';

import styles from './ArticleCard.module.scss';

export interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
  readingTime: number; // in minutes
  publishedDate: string; // e.g., "Oct 19, 2025"
  link: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  title,
  description,
  readingTime,
  publishedDate,
  link,
}) => {
  return (
    <Card className={styles.card} component="a" href={link} shadow="sm" radius="md">
      <Card.Section>
        <Image src={image} alt={title} h={250} fit="cover" />
      </Card.Section>

      <Stack gap={12} mt="md" h="100%">
        <Title order={2} size="xl" fw={700} lineClamp={2} className={styles.title}>
          {title}
        </Title>

        <Text c="dimmed" lineClamp={3}>
          {description}
        </Text>

        <Group gap={12} mt="auto">
          <Group gap={6}>
            <IconCalendar size={16} stroke={1.5} />
            <Text size="sm" c="dimmed">
              {publishedDate}
            </Text>
          </Group>

          <Group gap={6}>
            <IconClock size={16} stroke={1.5} />
            <Text size="sm" c="dimmed">
              {readingTime} min read
            </Text>
          </Group>
        </Group>
      </Stack>
    </Card>
  );
};
