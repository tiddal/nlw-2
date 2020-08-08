import React, { useState, FormEvent } from 'react';

import {
  Container, Content, Form,
} from './styles';
import Header from '../../components/Header';
import TeacherProfile from '../../components/TeacherProfile';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

const Teachers: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [classes, setClasses] = useState([]);

  async function searchClasses(event: FormEvent) {
    event.preventDefault();
    const response = await api.get('classes', {
      params: {
        subject,
        weekDay,
        time,
      },
    });
    setClasses(response.data);
  }

  return (
    <Container>
      <Header title="Estes são os proffys disponíveis:">
        <Form onSubmit={searchClasses}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={({ target: { value } }) => setSubject(value)}
            options={[
              {
                value: 'art',
                label: 'Artes',
              },
              {
                value: 'biology',
                label: 'Biologia',
              },
              {
                value: 'pd',
                label: 'Educação Física',
              },
              {
                value: 'physics',
                label: 'Física',
              },
              {
                value: 'history',
                label: 'História',
              },
              {
                value: 'maths',
                label: 'Matemática',
              },
              {
                value: 'portuguese',
                label: 'Português',
              },
            ]}
          />
          <Select
            name="weekDay"
            label="Dia de Semana"
            value={weekDay}
            onChange={({ target: { value } }) => setWeekDay(value)}
            options={[
              {
                value: '0',
                label: 'Domingo',
              },
              {
                value: '1',
                label: 'Segunda-feira',
              },
              {
                value: '2',
                label: 'Terça-feira',
              },
              {
                value: '3',
                label: 'Quarta-feira',
              },
              {
                value: '4',
                label: 'Quinta-feira',
              },
              {
                value: '5',
                label: 'Sexta-feira',
              },
              {
                value: '6',
                label: 'Sábado',
              },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={({ target: { value } }) => { setTime(value); }}
          />
          <button type="submit">Procurar</button>
        </Form>
      </Header>
      <Content>
        {classes.map((class_) => <TeacherProfile class_={class_} />)}
      </Content>
    </Container>
  );
};

export default Teachers;
