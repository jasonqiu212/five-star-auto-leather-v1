import { Card, Container, Group, Text, Title } from '@mantine/core';

export const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: 'Caring for Your Leather Interior',
      date: 'October 15, 2025',
      excerpt:
        'Learn the best practices for maintaining your custom leather interior and keeping it looking new for years to come.',
    },
    {
      title: 'The Art of Automotive Upholstery',
      date: 'September 28, 2025',
      excerpt:
        'Discover the craftsmanship and attention to detail that goes into every custom upholstery project.',
    },
    {
      title: 'Choosing the Right Leather for Your Vehicle',
      date: 'September 10, 2025',
      excerpt:
        'A comprehensive guide to selecting the perfect leather type and color for your automotive interior project.',
    },
  ];

  return (
    <div>
      <Container size="lg" py={60}>
        <Title order={1} mb={30}>
          Blog
        </Title>

        <Text size="lg" mb={40}>
          Stay updated with tips, insights, and news from Five Star Auto Leather.
        </Text>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {blogPosts.map((post, index) => (
            <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
              <Group justify="space-between" mb="xs">
                <Title order={3}>{post.title}</Title>
              </Group>

              <Text size="sm" c="dimmed" mb="md">
                {post.date}
              </Text>

              <Text size="md">{post.excerpt}</Text>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};
