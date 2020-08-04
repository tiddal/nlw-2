import styled from 'styled-components';

const Container = styled.section`
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  color: var(--color-text-in-primary);
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  @media (min-width: 1100px){
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: 
      "logo hero hero"
      "cta cta connections"
  }
`;

const Logo = styled.div`
  padding: 2rem;
  img{
    width: 100%;
  }
  @media (min-width: 1100px){
    justify-self: start;
    grid-area: logo;
  }
`;

const Lead = styled.h2`
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
  @media (min-width: 1100px){
    font-size: 2.5rem;
  }
`;

const Hero = styled.div`
  img {
    width: 100%;
  }
  @media (min-width: 1100px){
    grid-area: hero;
  }
`;

const CTA = styled.section`
  display:flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 1100px){
    grid-area: cta;
    flex-direction: row;
    justify-self: start;
  }

  a {
    margin: 0 0.8rem;
    width: 30rem;
    height: 6.4rem;
    border-radius: 0.8rem;
    font: 700 2.0rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--color-button-text);
    transition: background .3s ease;
    cursor: pointer;
    background-color: var(--color-secondary);
    :hover {
      background-color: var(--color-secondary-dark);
    }
    img {
      width: 4rem;
      margin-right: 2.4rem;
    }
    &:first-child {
      background-color: var(--color-primary-lighter);
      :hover {
        background-color: var(--color-primary-light);
      }
    }
  }
`;

const Connections = styled.span`
  font-size: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  img {
    margin-left: 0.8rem;
    width: 2rem;
  }
  @media (min-width: 1100px){
    grid-area: connections;
  }
`;

export {
  Container,
  Content,
  Logo,
  Lead,
  Hero,
  CTA,
  Connections,
};
