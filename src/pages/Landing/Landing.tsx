import { Stack } from '@mantine/core';

import { Footer } from '../../components/Footer';
import { HeroBanner } from './components/HeroBanner';
import { WhatWeDo } from './components/WhatWeDo';

export const Landing: React.FC = () => {
  return (
    <Stack gap={0}>
      <HeroBanner />

      <WhatWeDo />

      <div id="contact">
        <Footer />
      </div>
    </Stack>
  );
};
