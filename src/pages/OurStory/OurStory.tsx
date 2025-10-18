import { Container, Text, Title } from '@mantine/core';

export const OurStory: React.FC = () => {
  return (
    <div>
      <Container size="lg" py={60}>
        <Title order={1} mb={30}>
          Our Story
        </Title>

        <Text size="lg" mb={20}>
          Since 2005, Five Star Auto Leather has been dedicated to providing premium automotive
          interior services with unmatched quality and attention to detail.
        </Text>

        <Text size="md" c="dimmed">
          Our journey began with a passion for craftsmanship and a commitment to excellence that
          continues to drive us today.
        </Text>
      </Container>
    </div>
  );
};
