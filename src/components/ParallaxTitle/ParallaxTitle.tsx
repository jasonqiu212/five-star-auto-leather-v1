import React from 'react';

import { Box, Container, Title } from '@mantine/core';

import styles from './ParallaxTitle.module.scss';

interface ParallaxTitleProps {
  backgroundImage: string;
  title: string;
  overlayOpacity?: number;
  minHeight?: number | string;
  titleOrder?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const ParallaxTitle: React.FC<ParallaxTitleProps> = ({
  backgroundImage,
  title,
  overlayOpacity = 0.7,
  minHeight = 400,
  titleOrder = 1,
}) => {
  return (
    <Box
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: typeof minHeight === 'number' ? `${minHeight}px` : minHeight,
      }}
    >
      <Box
        className={styles.overlay}
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      />

      <Container size="xl" className={styles.content}>
        <Title order={titleOrder} c="white">
          {title}
        </Title>
      </Container>
    </Box>
  );
};
