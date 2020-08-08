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
  label span {
    color: var(--color-text-in-primary);
  }
  button {
    width: 100%;
    height: 5.6rem;
    background-color: var(--color-secondary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration:none;
    transition: background .3s ease;
    margin-top: 3.2rem;
    @media(min-width: 700px){
      margin-top: 0;
      align-self: end;
    }
    :hover {
      background-color: var(--color-secondary-dark);
    }
  }

  @media(min-width: 700px){
    grid-template-columns: repeat(4, 1fr);
    margin-top: 0;
    position: absolute;
    bottom: -28px;
  }
`;

export {
  Container, Content, Form,
};
