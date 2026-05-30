import React from 'react';

export type IconName =
  | 'arrow-right'
  | 'check'
  | 'users'
  | 'star'
  | 'menu'
  | 'close'
  | 'home'
  | 'info'
  | 'rocket'
  | 'globe'
  | 'shield';

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className = '',
}) => {
  return <span className={className}>[{name}]</span>;
};

export default Icon;
