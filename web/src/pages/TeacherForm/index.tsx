import React, { useState, FormEvent } from 'react';

import { useHistory } from 'react-router-dom';
import { Container, Content, InputGroup } from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

const TeacherForm: React.FC = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsApp, setWhatsApp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { weekDay: 0, from: '', to: '' },
  ]);

  const history = useHistory();

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems, { weekDay: 0, from: '', to: '' },
    ]);
  }

  async function handleCreateClass(event: FormEvent) {
    event.preventDefault();
    await api.post('classes', {
      name,
      avatar,
      whatsApp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    });
    history.push('/');
  }

  function setScheduleItem(index: number, field: string, value: string) {
    setScheduleItems(
      scheduleItems.map(
        (scheduleItem, position) => (
          index === position
            ? ({ ...scheduleItems[index], [field]: value })
            : scheduleItem),
      ),
    );
  }

  return (
    <Container>
      <Header
        title="Que incrível que quer dar aulas!"
        description="O primeiro passo é preencher este formulário de inscrição."
      />
      <Content>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Dados:</legend>
            <section>
              <Input
                name="name"
                label="Nome Completo"
                value={name}
                onChange={({ target: { value } }) => setName(value)}
              />
              <Input
                name="avatar"
                label="Avatar"
                value={avatar}
                onChange={({ target: { value } }) => setAvatar(value)}
              />
              <Input
                name="whatsApp"
                label="WhatsApp"
                value={whatsApp}
                onChange={({ target: { value } }) => setWhatsApp(value)}
              />
              <Textarea
                name="bio"
                label="Biografia"
                value={bio}
                onChange={({ target: { value } }) => setBio(value)}
              />
            </section>
          </fieldset>

          <fieldset>
            <legend>Sobre a aula:</legend>
            <section>
              <Select
                name="subject"
                label="Matéria"
                value={subject}
                onChange={({ target: { value } }) => setSubject(value)}
                options={[
                  {
                    value: 'Artes',
                    label: 'Artes',
                  },
                  {
                    value: 'Biologia',
                    label: 'Biologia',
                  },
                  {
                    value: 'Educação Física',
                    label: 'Educação Física',
                  },
                  {
                    value: 'Física',
                    label: 'Física',
                  },
                  {
                    value: 'História',
                    label: 'História',
                  },
                  {
                    value: 'Matemática',
                    label: 'Matemática',
                  },
                  {
                    value: 'Português',
                    label: 'Português',
                  },
                ]}
              />
              <Input
                name="cost"
                label="Custo da hora por aula"
                value={cost}
                onChange={({ target: { value } }) => setCost(value)}
              />
            </section>
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis:
              <button type="button" onClick={addNewScheduleItem}>+ Novo Horário</button>
            </legend>
            <section>
              {scheduleItems.map((scheduleItem, index) => (
                <InputGroup key={scheduleItem.weekDay}>
                  <Select
                    name="weekDay"
                    label="Dia de Semana"
                    onChange={({ target: { value } }) => setScheduleItem(index, 'weekDay', value)}
                    value={scheduleItem.weekDay}
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
                    name="from"
                    label="Das"
                    value={scheduleItem.from}
                    onChange={({ target: { value } }) => setScheduleItem(index, 'from', value)}
                  />
                  <Input
                    type="time"
                    name="to"
                    label="Até"
                    value={scheduleItem.to}
                    onChange={({ target: { value } }) => setScheduleItem(index, 'to', value)}
                  />
                </InputGroup>
              ))}

            </section>
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante
              <br />
              Preencha todos os dados
            </p>
            <button type="submit">
              Inscrever
            </button>
          </footer>
        </form>
      </Content>
    </Container>
  );
};

export default TeacherForm;
