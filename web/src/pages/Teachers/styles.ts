import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Content = styled.main`
  margin: 3.2rem auto;
  width: 90%;
  @media(min-width: 700px){
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;

const Form = styled.form`
  margin-top: 3.2rem;
  display: grid;
  gap: 1.4rem;
  label {
    position: relative;
    span {
      color: var(--color-text-in-primary);
      font-size: 1.4rem;
    }
    input {
      width: 100%;
      height: 5.6rem;
      margin-top: 0.8rem;
      border-radius: 0.8rem;
      background-color: var(--color-input-background);
      border: 1px solid var(--color-line-in-white);
      outline: 0;
      padding: 0 1.6rem;
      font: 1.6rem Archivo;
    }
    :focus-within::after {
      width: calc(100% - 3.2rem);
      height: 2px;
      content: '';
      background-color: var(--color-primary-light);
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;
    }
  }

  @media(min-width: 700px){
    grid-template-columns: repeat(3, 1fr);
    margin-top: 0;
    position: absolute;
    bottom: -28px;
  }
`;

export {
  Container, Content, Form,
};
