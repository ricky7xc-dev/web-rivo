import React from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption';
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  component,
  children,
  className = '',
}) => {
  const Component = component || (variant.startsWith('h') ? (variant as 'h1' | 'h2' | 'h3' | 'h4') : 'p');

  return <Component className={className}>{children}</Component>;
};

export default Typography;
