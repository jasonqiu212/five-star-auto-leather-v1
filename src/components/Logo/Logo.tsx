import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Image } from '@mantine/core';

import logo from '../../assets/logo.png';

interface LogoProps {
  width?: number;
}

export const Logo: React.FC<LogoProps> = ({ width = 85 }) => {
  const navigate = useNavigate();

  return (
    <Image
      src={logo}
      alt="Five Star Auto Leather"
      w={width}
      onClick={() => navigate('/')}
      style={{ cursor: 'pointer' }}
    />
  );
};
