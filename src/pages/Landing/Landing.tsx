import { Stack } from '@mantine/core';

import { Footer } from '../../components/Footer';
import { BusinessInNumbers } from './components/BusinessInNumbers';
import { HeroBanner } from './components/HeroBanner';
import { WhatWeDo } from './components/WhatWeDo';
import { Why } from './components/Why';

export const Landing: React.FC = () => {
  return (
    <Stack gap={0}>
      <HeroBanner />

      <WhatWeDo />

      <BusinessInNumbers />

      <Why />

      <div id="contact">
        <Footer />
      </div>
    </Stack>
  );
};
