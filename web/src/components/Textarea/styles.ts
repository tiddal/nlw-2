import styled from 'styled-components';

const Container = styled.div`
  label {
    position: relative;
    span {
      font-size: 1.4rem;
    }
    textarea {
      width: 100%;
      height: 16rem;
      margin-top: 0.8rem;
      border-radius: 0.8rem;
      background-color: var(--color-input-background);
      border: 1px solid var(--color-line-in-white);
      outline: 0;
      padding: 1.2rem 1.6rem;
      font: 1.6rem Archivo;
      resize: vertical;
      min-height: 8rem;
    }
    :focus-within::after {
      width: calc(100% - 3.2rem);
      height: 2px;
      content: '';
      background-color: var(--color-primary-light);
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 6px;
    }  
  }
`;

export default Container;
