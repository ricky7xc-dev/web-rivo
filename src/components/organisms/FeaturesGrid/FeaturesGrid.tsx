import React from 'react';
import Typography from '../../atoms/Typography/Typography';
import FeatureCard from '../../molecules/FeatureCard/FeatureCard';

export const FeaturesGrid: React.FC = () => {
  return (
    <section style={{ padding: '20px 0' }}>
      <Typography variant="h2">Features</Typography>
      <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
        <FeatureCard iconName="rocket" title="Fast" description="Built with Next.js." />
        <FeatureCard iconName="shield" title="Secure" description="Best practices enabled." />
      </div>
    </section>
  );
};

export default FeaturesGrid;
