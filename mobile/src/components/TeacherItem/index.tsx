import React, { useState } from 'react';
import { Image, Linking, AsyncStorage } from 'react-native';
import favoriteIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';


import { Container, Profile, Avatar, Name, ProfileInfo, Subject, Bio, Footer, Price, Value, ButtonsContainer, FavoriteButton, FavoritedButton, ContactButton, ContactButtonText } from './styles';
import api from '../../services/api';

interface TeacherProfileProps {
  teacher: {
    id: string;
    cost: number;
    subject: string;
    user: {
      name: string;
      avatar: string;
      whatsApp: string;
      bio: string;
      id: string;
    };
  };
  favorite: boolean;
}


const TeacherItem: React.FC<TeacherProfileProps> = ({ teacher, favorite }) => {

  const [isFavorite, setIsFavorite] = useState(favorite);

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesArray = [];
    if (favorites) favoritesArray = JSON.parse(favorites);
    if (isFavorite) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: TeacherProfileProps["teacher"]) => teacherItem.id === teacher.user.id);
      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorite(false);
    } else {
      favoritesArray.push(teacher);
      setIsFavorite(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <Container key={teacher.id}>
      <Profile>
        <Avatar source={{ uri: teacher.user.avatar }} />
        <ProfileInfo>
          <Name>{teacher.user.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>
        {teacher.user.bio}
      </Bio>

      <Footer>
        <Price>Preço/hora {'  '}<Value>{teacher.cost}€</Value></Price>
        <ButtonsContainer>
          {!isFavorite ? (
            <FavoriteButton onPress={handleToggleFavorite}>
              <Image source={favoriteIcon} />
            </FavoriteButton>
          ) : (
              <FavoritedButton onPress={handleToggleFavorite}>
                <Image source={unfavoriteIcon} />
              </FavoritedButton>
            )}

          <ContactButton onPress={() => {
            api.post('connections', { userId: teacher.user.id });
            Linking.openURL(`whatsapp://send?phone=${teacher.user.whatsApp}`);
          }} >
            <Image source={whatsAppIcon} />
            <ContactButtonText>Entrar em contacto</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;