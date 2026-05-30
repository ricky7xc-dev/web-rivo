import React from 'react';
import Typography from '../../atoms/Typography/Typography';

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  description,
  className = '',
}) => {
  return (
    <div className={className}>
      <Typography variant="h1" component="span">
        {value}
      </Typography>
      <Typography variant="h4" component="h4">
        {label}
      </Typography>
      {description && (
        <Typography variant="body">
          {description}
        </Typography>
      )}
    </div>
  );
};

export default StatCard;
