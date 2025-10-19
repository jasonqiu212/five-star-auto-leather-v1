import React from 'react';

import FoundersImage from '@/assets/founders.png';
import OurStoryImage from '@/assets/our-story.jpg';
import { Footer } from '@/components/Footer';
import { ParallaxTitle } from '@/components/ParallaxTitle';
import { Container, Image, Stack, Text } from '@mantine/core';

export const OurStory: React.FC = () => {
  return (
    <Stack gap={0}>
      <ParallaxTitle backgroundImage={OurStoryImage} title="Our Story" />
      <Container size="xl" py="xl">
        <Stack gap={12}>
          <Image src={FoundersImage} alt="Our Story" w="100%" maw={500} mx="auto" />
          <Text size="lg" ta="center" fw={700}>
            Integrity – Quality – Service
          </Text>
          <Text size="lg" ta="center" fw={700}>
            诚信 – 品质 – 服务
          </Text>
          <Text>
            These are the three pillars our Co-Presidents, Mr Mensono and Mdm Ang Poh Tin, have
            built Five Star Auto Leather on. Their story began in 1984 in Batam, Indonesia. With
            nothing but dreams of making a better living for their family, they tried every business
            idea they had – selling electronics, watches and even car accessories. For 12 years,
            they struggled to make ends meet.
          </Text>
          <Text>
            Opportunity came to them in 2006, when they ventured into Singapore with a potential
            business partner. They started with refurbishing deregistered cars which were exported
            for sale. It was difficult work which often required them to labour into late hours of
            the night, sewing in a dark factory. But our Co-Presidents persevered and their hard
            work paid off.
          </Text>
          <Text>
            Five Star Auto Leather was then born, furnishing the interiors of the Lion City’s cars
            with quality leather upholstery. Our Co-Presidents poured their heart and soul into the
            business and built their reputation bit by bit, attracting more customers each day. To
            keep quality leather seats a luxury that everyone can afford to enjoy, Five Star
            established a manufacturing base in Batam, employing talented employees sewing each
            stitch with care. Our Singapore experts are in charge of assembling the new seats and
            performing quality checks.
          </Text>
          <Text>
            15 years on, Five Star Auto Leather now services more than 100 cars a month with 21
            experts working tirelessly on your beloved cars. We may not be the largest player in the
            industry, but we take on every request with all our hearts. Our designs are lovingly
            crafted by our President Mr Mensono himself, and we strive for full customer
            satisfaction with our quality and service. You can always rely on us delivering the best
            for your car. 
          </Text>
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
};
