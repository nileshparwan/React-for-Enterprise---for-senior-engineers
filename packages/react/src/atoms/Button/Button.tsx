import React from 'react';

interface ButtonProps {
  label: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({ label }) => {
  return <button type='button'>{label}</button>;
};

export default Button;
