import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';
import Header from '../../components/Header';

const Favorites: React.FC = () => {
  return (
    <Container>
      <Header title="Meus Proffys favoritos" />
    </Container>
  );

};

export default Favorites;