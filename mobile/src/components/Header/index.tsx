import React, { ReactNode } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Container, TopBar, Title, TitleGroup } from './styles';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  filter?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, filter, children }) => {

  const { navigate } = useNavigation();

  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={() => navigate('Landing')}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>
        <Image source={logoImg} resizeMode="contain" />
      </TopBar>
      <TitleGroup>
        <Title>{title}</Title>
        {filter}
      </TitleGroup>
      {children}
    </Container>
  );
};

export default Header;