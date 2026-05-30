import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input: React.FC<InputProps> = ({
  error = false,
  className = '',
  ...props
}) => {
  return <input className={className} {...props} />;
};

export default Input;
