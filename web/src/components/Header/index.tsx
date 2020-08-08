import React from 'react';
import { Link } from 'react-router-dom';

import logoImageSource from '../../assets/images/logo.svg';
import backIconSource from '../../assets/images/icons/back.svg';

import { Container, Content, TopBar } from './styles';

interface HeaderProps {
  title: string;
  description?: string;
}

const Header: React.FC<HeaderProps> = ({ title, description, children }) => (
  <Container>
    <TopBar>
      <Link to="/">
        <img src={backIconSource} alt="back" />
      </Link>
      <img src={logoImageSource} alt="logo" />
    </TopBar>
    <Content>
      <strong>{title}</strong>
      {description && <p>{description}</p>}
      {children}
    </Content>
  </Container>
);

export default Header;
