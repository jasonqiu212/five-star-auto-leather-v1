import OurStoryImage from '@/assets/our-story.jpg';
import { Footer } from '@/components/Footer';
import { ParallaxTitle } from '@/components/ParallaxTitle';
import { Container, Stack, Text } from '@mantine/core';

export const OurStory: React.FC = () => {
  return (
    <Stack gap={0}>
      <ParallaxTitle backgroundImage={OurStoryImage} title="Our Story" />
      <Container size="xl" py={54}>
        <Text size="lg" mb={20}>
          Since 2005, Five Star Auto Leather has been dedicated to providing premium automotive
          interior services with unmatched quality and attention to detail.
        </Text>
      </Container>
      <Footer />
    </Stack>
  );
};
