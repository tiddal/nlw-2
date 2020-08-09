import React, { useEffect, useState } from 'react';

import { Container, List } from './styles';
import Header from '../../components/Header';
import TeacherItem from '../../components/TeacherItem';
import { AsyncStorage } from 'react-native';
import { classProps } from '../TeacherList';

const Favorites: React.FC = () => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) setFavorites(JSON.parse(response));
    });
  }, []);

  return (
    <Container>
      <Header title="Meus Proffys favoritos" />
      <List>
        {favorites.map(({ teacher }: classProps) => <TeacherItem teacher={teacher} favorite />)}
      </List>
    </Container>
  );

};

export default Favorites;