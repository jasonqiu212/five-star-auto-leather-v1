import { Container, SimpleGrid, Text, Title } from '@mantine/core';

export const Gallery: React.FC = () => {
  return (
    <div>
      <Container size="lg" py={60}>
        <Title order={1} mb={30}>
          Gallery
        </Title>

        <Text size="lg" mb={30}>
          Explore our portfolio of completed projects and see the quality of our craftsmanship.
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {/* Placeholder for gallery items */}
          <div
            style={{
              height: 200,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <Text>Project 1</Text>
          </div>
          <div
            style={{
              height: 200,
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <Text>Project 2</Text>
          </div>
          <div
            style={{
              height: 200,
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <Text>Project 3</Text>
          </div>
          <div
            style={{
              height: 200,
              background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <Text>Project 4</Text>
          </div>
          <div
            style={{
              height: 200,
              background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <Text>Project 5</Text>
          </div>
          <div
            style={{
              height: 200,
              background: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <Text>Project 6</Text>
          </div>
        </SimpleGrid>
      </Container>
    </div>
  );
};
