import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

const Container = styled.View`
  flex: 1;
  background-color: #8257e5;
  justify-content: center;
  padding: 40px;
`;

const Banner = styled.Image`
  width: 100%;
  resize-mode: contain;
`

const Title = styled.Text`
  color: #ffffff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 40px;
  font-family: 'Poppins_400Regular';
`

const TitleBold = styled.Text`
  font-family: 'Poppins_600SemiBold';
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

const Button = styled(RectButton)`
  height: 150px;
  width: 48%;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;

const PrimaryButton = styled(Button)`
  background-color: #9871f5;
`;

const SecondaryButton = styled(Button)`
  background-color: #04d361;
`;

const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #ffffff;
  font-size: 20px;
`;

const TotalConnection = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`

export { Container, Banner, Title, TitleBold, ButtonsContainer, PrimaryButton, SecondaryButton, ButtonText, TotalConnection };
