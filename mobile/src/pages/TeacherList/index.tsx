import React, { useState, useEffect } from 'react';

import { Container, List, Form, Label, Input, InputGroup, InputBlock, Submit, SubmitText } from './styles';
import Header from '../../components/Header';
import TeacherItem from '../../components/TeacherItem';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

export interface classProps {
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

}

const TeacherList: React.FC = () => {

  const [favorites, setFavorites] = useState<string[]>([]);

  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState([]);

  const [filtersVisibility, setFiltersVisibility] = useState(false);

  useEffect(() => {


  }, []);

  async function handleFilterSubmission() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) setFavorites(JSON.parse(response).map(({ teacher }: classProps) => teacher.user.id));
    });
    const response = await api.get('classes', {
      params: {
        subject,
        weekDay,
        time,
      },
    });
    setFiltersVisibility(false);
    setTeachers(response.data);
  }

  return (
    <Container>
      <Header title="Proffys disponíveis" filter={(
        <BorderlessButton onPress={() => setFiltersVisibility(!filtersVisibility)}>
          <Feather name="filter" size={24} color="#ffffff" />
        </BorderlessButton>
      )}>
        {filtersVisibility && (
          <Form>
            <Label>Matéria</Label>
            <Input
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
              value={subject}
              onChangeText={(text) => setSubject(text)}
            />
            <InputGroup>
              <InputBlock>
                <Label>Dia da Semana</Label>
                <Input
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                  value={weekDay}
                  onChangeText={(text) => setWeekDay(text)}
                />
              </InputBlock>
              <InputBlock>
                <Label>Horário</Label>
                <Input
                  placeholder="Qual o horário?"
                  placeholderTextColor="#c1bccc"
                  value={time}
                  onChangeText={(text) => setTime(text)}
                />
              </InputBlock>
            </InputGroup>

            <Submit onPress={handleFilterSubmission}>
              <SubmitText>Filtrar</SubmitText>
            </Submit>
          </Form>
        )}


      </Header>
      <List>
        {teachers.map(({ teacher }: classProps) => <TeacherItem teacher={teacher} favorite={favorites.includes(teacher.user.id)} />)}

      </List>
    </Container>

  );
};

export default TeacherList;