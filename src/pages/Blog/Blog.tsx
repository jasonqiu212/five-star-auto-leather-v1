import React from 'react';

import BlogImage from '@/assets/blog.jpg';
import CustomizationImage from '@/assets/customization.jpg';
import SeatImage from '@/assets/seat.jpg';
import UpholsteryImage from '@/assets/upholstery.jpg';
import { Footer } from '@/components/Footer';
import { ParallaxTitle } from '@/components/ParallaxTitle';
import { Container, Grid, Stack } from '@mantine/core';

import { ArticleCard } from './components/ArticleCard';

export const Blog: React.FC = () => {
  const blogPosts = [
    {
      image: SeatImage,
      title: 'Caring for Your Leather Interior',
      description:
        'Learn the best practices for maintaining your custom leather interior and keeping it looking new for years to come.',
      publishedDate: '15 Oct 2025',
      readingTime: 5,
      link: '#',
    },
    {
      image: UpholsteryImage,
      title: 'The Art of Automotive Upholstery',
      description:
        'Discover the craftsmanship and attention to detail that goes into every custom upholstery project.',
      publishedDate: '28 Sep 2025',
      readingTime: 7,
      link: '#',
    },
    {
      image: CustomizationImage,
      title: 'Choosing the Right Leather for Your Vehicle',
      description:
        'A comprehensive guide to selecting the perfect leather type and color for your automotive interior project.',
      publishedDate: '10 Sep 2025',
      readingTime: 6,
      link: '#',
    },
  ];

  return (
    <Stack gap={0}>
      <ParallaxTitle backgroundImage={BlogImage} title="Blog" />
      <Container size="xl" py="xl">
        <Grid gutter="lg">
          {blogPosts.map((post, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
              <ArticleCard
                image={post.image}
                title={post.title}
                description={post.description}
                publishedDate={post.publishedDate}
                readingTime={post.readingTime}
                link={post.link}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Stack>
  );
};
