import React from 'react';
import Input from '../../atoms/Input/Input';
import Typography from '../../atoms/Typography/Typography';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorText?: string;
  id: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  errorText,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className={className}>
      <label htmlFor={id}>
        <Typography variant="caption" component="span">{label}</Typography>
      </label>
      <Input id={id} error={!!errorText} {...props} />
      {errorText && (
        <Typography variant="caption">
          {errorText}
        </Typography>
      )}
    </div>
  );
};

export default FormField;
