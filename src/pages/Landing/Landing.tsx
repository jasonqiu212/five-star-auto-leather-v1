import { Button, Container, Text, Title } from '@mantine/core';

export const Landing: React.FC = () => {
  return (
    <div>
      <Container size="lg">
        <Title>Five Star Auto Leather</Title>

        <Text mt={30}>
          Custom Automotive Interiors | Quality Workmanship | Five Star Service since 2005
        </Text>

        <Button variant="gradient" gradient={{ from: 'pink', to: 'yellow' }} size="xl" mt={40}>
          Get started
        </Button>
      </Container>
    </div>
  );
};
