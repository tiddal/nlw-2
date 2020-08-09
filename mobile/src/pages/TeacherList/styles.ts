import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

const Container = styled.View`
  flex:1;
  background-color: #f0f0f7;
`;

const List = styled.ScrollView`
  margin-top: -40px;
  padding-horizontal: 16px;
`;

const Form = styled.View`
  margin-bottom: 24px;
`;

const Label = styled.Text`
  color: #d4c2ff;
  font-family: 'Poppins_400Regular';
`;

const Input = styled.TextInput`
  height: 54px;
  background-color: #ffffff;
  border-radius: 8px;
  justify-content: center;
  padding-horizontal: 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;

`;

const InputBlock = styled.View`
  width: 48%;
`;

const Submit = styled(RectButton)`
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: #04d361;
  flex-direction: row;
`;

const SubmitText = styled.Text`
  color: #ffffff;
  font-family:'';
  font-size: 16px;
`;

export { Container, List, Form, Input, InputBlock, InputGroup, Label, Submit, SubmitText };
