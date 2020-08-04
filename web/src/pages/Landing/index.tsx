import React from 'react';
import { Link } from 'react-router-dom';

import logoImageSource from '../../assets/images/logo.svg';
import heroImageSource from '../../assets/images/landing.svg';
import studyIconSource from '../../assets/images/icons/study.svg';
import classesIconSource from '../../assets/images/icons/give-classes.svg';
import heartIconSource from '../../assets/images/icons/purple-heart.svg';

import {
  Container,
  Content,
  Logo,
  Lead,
  Hero, Connections, CTA,
} from './styles';

const Landing: React.FC = () => (
  <Container>
    <Content>
      <Logo>
        <img src={logoImageSource} alt="logo" />
        <Lead>
          A sua plataforma de estudos online
        </Lead>
      </Logo>
      <Hero>
        <img src={heroImageSource} alt="hero shot" />
      </Hero>
      <CTA>
        <Link to="/study">
          <img src={studyIconSource} alt="study" />
          {' '}
          Estudar
        </Link>
        <Link to="/teach">
          <img src={classesIconSource} alt="classes" />
          Ensinar
        </Link>
      </CTA>
      <Connections>
        Mais de 200 pessoas já se inscreveram
        {' '}
        <img src={heartIconSource} alt="heart" />
      </Connections>
    </Content>
  </Container>
);

export default Landing;
