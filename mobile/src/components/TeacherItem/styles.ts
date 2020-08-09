import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

const Container = styled.View`
  background-color: #ffffff;
  border: 1px solid #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eeeeee;
`;

const ProfileInfo = styled.View`
  margin-left: 16px;
`;

const Name = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #32264d;
  font-size: 20px;
`;

const Subject = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #6a6180;
  font-size: 12px;
  margin-top: 4px;
`;

const Bio = styled.Text`
  margin-horizontal: 24px;
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  line-height: 24px;
  color: #6a6180;
`;

const Footer = styled.View`
  background-color: #fafafc;
  padding: 24px;
  align-items: center;
  margin-top: 24px;
`;

const Price = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #6a6180;
  font-size: 14px;
`;

const Value = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #8257e5;
  font-size: 16px;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

const Button = styled(RectButton)`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const FavoriteButton = styled(Button)`
  background-color: #8257e5;
  margin-right: 8px;
`;

const FavoritedButton = styled(FavoriteButton)`
  background-color: #e33d3d;
`;

const ContactButton = styled(Button)`
  flex: 1;
  background-color: #04d361;
  flex-direction: row;
`;

const ContactButtonText = styled.Text`
  color: #ffffff;
  font-family:'';
  font-size: 16px;
  margin-left: 16px;
`;

export { Container, Profile, Avatar, ProfileInfo, Name, Subject, Bio, Footer, Price, Value, ButtonsContainer, FavoriteButton, FavoritedButton, ContactButton, ContactButtonText };