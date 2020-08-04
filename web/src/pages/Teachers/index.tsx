import React from 'react';

import {
  Container, Content, Form,
} from './styles';
import Header from '../../components/Header';
import TeacherProfile from '../../components/TeacherProfile';

const Teachers: React.FC = () => (
  <Container>
    <Header title="Estes são os proffys disponíveis:">
      <Form>
        <label htmlFor="subject">
          <span>Matérias</span>
          <input type="text" id="subject" />
        </label>
        <label htmlFor="week_day">
          <span>Dia da semana</span>
          <input type="text" id="week_day" />
        </label>
        <label htmlFor="time">
          <span>Hora</span>
          <input type="text" id="time" />
        </label>
      </Form>
    </Header>
    <Content>
      <TeacherProfile />
    </Content>
  </Container>
);

export default Teachers;
