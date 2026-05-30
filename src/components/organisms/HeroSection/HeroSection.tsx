import React from 'react';
import Typography from '../../atoms/Typography/Typography';

export const HeroSection: React.FC = () => {
  return (
    <section style={{ padding: '20px 0' }}>
      <Typography variant="h1">Welcome to Rivo</Typography>
      <Typography variant="body">
        This is a simple landing page hero section.
      </Typography>
    </section>
  );
};

export default HeroSection;
