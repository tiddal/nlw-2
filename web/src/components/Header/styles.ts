import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
  @media(min-width: 700px){
    height: 340px;
  }
`;

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;
  color: var(--color-title-in-primary);
  strong {
    font: 700 3.6rem Archivo;
  }

  @media(min-width: 700px){
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    align-items: flex-start;
    justify-content: center;
    strong {
      max-width: 350px;
    }
  }
  
`;

const TopBar = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;  
  & > img {
    height: 1.6rem;
  }
  a{
    height: 3.2rem;
    transition: opacity .2s ease;
    :hover {
      opacity: 0.6;
    }
  }
  @media(min-width: 700px){
    max-width: 1100px;
  }
`;

export { Container, Content, TopBar };
