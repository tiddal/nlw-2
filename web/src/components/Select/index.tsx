import React, { SelectHTMLAttributes } from 'react';

import Container from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({
  label, name, options, ...rest
}) => (
    <Container>
      <label htmlFor={name}>
        <span>{label}</span>
        <select value="" id={name} {...rest}>
          <option value="" disabled hidden>Selecione uma opção</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </Container>
  );

export default Select;
