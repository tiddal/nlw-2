import React, { InputHTMLAttributes } from 'react';

import Container from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => (
  <Container>
    <label htmlFor={name}>
      <span>{label}</span>
      <input type="text" id={name} {...rest} />
    </label>
  </Container>

);

export default Input;
