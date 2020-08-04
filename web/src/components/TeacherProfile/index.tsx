import React from 'react';

import Container from './styles';

import whatsAppIconSource from '../../assets/images/icons/whatsapp.svg';

const TeacherProfile: React.FC = () => (
  <Container>
    <header>
      <img src="https://avatars1.githubusercontent.com/u/29706250?s=460&u=58529a9cff4532998bb9d6546dd998eedc500442&v=4" alt="Zé Pedro Resende" />
      <div>
        <strong>Zé Pedro Resende</strong>
        <span>Física</span>
      </div>
    </header>
    <p>
      Desenvolvedor
    </p>
    <footer>
      <p>
        Preço por hora:
        <strong>50,00€</strong>
      </p>
      <button type="button">
        <img src={whatsAppIconSource} alt="whatsapp" />
        Entrar em contacto
      </button>
    </footer>
  </Container>
);

export default TeacherProfile;
