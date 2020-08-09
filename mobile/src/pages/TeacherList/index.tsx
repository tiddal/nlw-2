import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';
import Header from '../../components/Header';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <Header title="Proffys disponíveis" />
    </Container>

  );
};

export default TeacherList;