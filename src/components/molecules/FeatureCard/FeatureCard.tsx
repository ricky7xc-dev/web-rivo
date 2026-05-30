import React from 'react';
import Icon, { IconName } from '../../atoms/Icon/Icon';
import Typography from '../../atoms/Typography/Typography';

interface FeatureCardProps {
  iconName: IconName;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  iconName,
  title,
  description,
  className = '',
}) => {
  return (
    <div className={className}>
      <Icon name={iconName} />
      <Typography variant="h3" component="h3">
        {title}
      </Typography>
      <Typography variant="body">
        {description}
      </Typography>
    </div>
  );
};

export default FeatureCard;
