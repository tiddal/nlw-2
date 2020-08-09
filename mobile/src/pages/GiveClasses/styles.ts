import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

const Container = styled.View`
  flex: 1;
  background-color: #8257e5;
  justify-content: center;
  padding: 40px;
`;

const Content = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`

const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #ffffff;
  font-size: 32px;
  line-height: 37px;
  max-width: 180px;
`

const Description = styled.Text`
  margin-top: 24px;
  color: #d4c2ff;
  font-size: 16px;
  line-height: 26px;
  font-family: 'Poppins_400Regular';
  max-width: 240px;
`

const Button = styled(RectButton)`
  margin-vertical: 40px;
  background-color: #04d351;
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`

const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #ffffff;
  font-size: 16px;

`

export { Container, Content, Title, Description, Button, ButtonText };
