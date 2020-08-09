import styled from 'styled-components/native';


const Container = styled.View`
  padding: 40px;
  background-color: #8257e5;
  
`;

const TopBar = styled.View`
  flex-direction: row; 
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #ffffff;
  font-size: 24px;
  line-height: 32px;
  max-width: 160px;
  margin-vertical: 40px;
`;

const TitleGroup = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;


export { Container, TopBar, Title, TitleGroup };
