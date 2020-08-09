import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Container, TopBar, Title } from './styles';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {

  const { navigate } = useNavigation();

  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={() => navigate('Landing')}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>
        <Image source={logoImg} resizeMode="contain" />
      </TopBar>
      <Title>{title}</Title>

    </Container>
  );
};

export default Header;