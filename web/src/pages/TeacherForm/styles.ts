import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  @media (min-width: 700px){
    max-width: 100vw;
    header div p {
      margin-bottom: 0;
    }
  }
`;

const Content = styled.main`
  background-color: var(--color-box-base);
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;

  fieldset {
    border: 0;
    padding: 0 2.4rem;
    legend {
      font: 700 2.3rem Archivo;
      color: var(--color-text-title);
      margin-bottom: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid var(--color-line-in-white);
      button {
        background: none;
        border: 0;
        color: var(--color-primary);
        font: 700 1.6rem Archivo;
        cursor: pointer;
        transition: color .3s ease;
        :hover {
          color: var(--color-primary-dark);
        }

      }
    }
    section {
      display: grid;
      gap: 1.4rem;
      label {
        color: var(--color-text-complement);
      }
    }

    @media (min-width: 700px) {
      padding: 0 6.4rem;
    }
  }

  fieldset + fieldset {
    margin-top: 6.4rem;
  }

  footer {
    padding: 4rem 2.4rem;
    background-color: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 6.4rem;
    
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 2.4rem;
      color: var(--color-text-complement);
      img {
        margin-right: 2rem;
      }
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
      display: block;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: background .3s ease;
      margin-top: 3.2rem;
      :hover {
        background-color: var(--color-secondary-dark);
      }
    }

    @media (min-width: 700px) {
      padding: 4rem 6.4rem;
      display: flex;
      align-items:center;
      justify-content: space-between;
      p {
        justify-content: space-between;
      }
      button {
        width: 20rem;
        margin-top: 0;
      }
    }
  }

`;

const InputGroup = styled.div`
  @media(min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1.6rem;
  }
`;

export { Container, Content, InputGroup };
