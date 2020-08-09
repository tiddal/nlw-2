import React from 'react';
import { View } from 'react-native';

import giveClassesBackgroundImage from '../../assets/images/give-classes-background.png';

import { Container, Content, Title, Description, Button, ButtonText } from './styles';
import { useNavigation } from '@react-navigation/native';

const GiveClasses: React.FC = () => {

  const { goBack } = useNavigation()

  return (
    <Container>
      <Content resizeMode="contain" source={giveClassesBackgroundImage} >
        <Title>Quer ser um Proffy?</Title>
        <Description>Para começar, precisa de se registar como professor na nossa plataforma web.</Description>
      </Content>
      <Button onPress={() => goBack()}>
        <ButtonText>Compreendi</ButtonText>
      </Button>
    </Container>
  );
}

export default GiveClasses;