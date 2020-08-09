import React, { useState, useEffect } from 'react';

import {
  Container,
  Banner,
  Title,
  TitleBold,
  ButtonsContainer,
  PrimaryButton,
  SecondaryButton,
  ButtonText,
  TotalConnection
} from './styles';

import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

const Landing: React.FC = () => {

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(((response) => {
      setTotalConnections(response.data.total);
    }));
  }, []);

  const { navigate } = useNavigation();

  return (
    <Container>
      <Banner source={landingImage} />
      <Title>
        Seja bem-vindo, {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>
      <ButtonsContainer>
        <PrimaryButton onPress={() => navigate('AppTabs')}>
          <Image source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </PrimaryButton>
        <SecondaryButton onPress={() => navigate('GiveClasses')} >
          <Image source={giveClassesIcon} />
          <ButtonText>Ensinar</ButtonText>
        </SecondaryButton>
      </ButtonsContainer>
      <TotalConnection>
        Total de {totalConnections} inscrições já registadas {' '}
        <Image source={heartIcon} />
      </TotalConnection>
    </Container>
  );
};

export default Landing;