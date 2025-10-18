import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Blog } from './pages/Blog';
import { FAQ } from './pages/FAQ';
import { Gallery } from './pages/Gallery';
import { Landing } from './pages/Landing';
import { OurStory } from './pages/OurStory';
import { WhatWeDo } from './pages/WhatWeDo';

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
