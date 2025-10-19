import WhatWeDoImage from '@/assets/what-we-do.jpg';
import { Footer } from '@/components/Footer';
import { ParallaxTitle } from '@/components/ParallaxTitle';
import { Stack } from '@mantine/core';

export const WhatWeDo: React.FC = () => {
  return (
    <Stack gap={0}>
      <ParallaxTitle backgroundImage={WhatWeDoImage} title="What We Do" />
      <Footer />
    </Stack>
  );
};
