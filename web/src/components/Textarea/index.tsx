import React, { TextareaHTMLAttributes } from 'react';

import Container from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => (
  <Container>
    <label htmlFor={name}>
      <span>{label}</span>
      <textarea id={name} {...rest} />
    </label>
  </Container>

);

export default Textarea;
