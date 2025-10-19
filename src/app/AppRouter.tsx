import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { Blog } from '../pages/Blog';
import { FAQ } from '../pages/FAQ';
import { Gallery } from '../pages/Gallery';
import { Landing } from '../pages/Landing';
import { OurStory } from '../pages/OurStory';

// import { WhatWeDo } from '../pages/WhatWeDo';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/our-story" element={<OurStory />} />
          {/* <Route path="/what-we-do" element={<WhatWeDo />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
