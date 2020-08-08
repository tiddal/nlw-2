import React from 'react';

import Container from './styles';

import whatsAppIconSource from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

interface TeacherProfileProps {
  class_: {
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

const TeacherProfile: React.FC<TeacherProfileProps> = ({ class_ }) => {
  function createNewConnection() {
    api.post('/connections', {
      userId: class_.user.id,
    });
  }

  return (
    <Container key={class_.id}>
      <header>
        <img src={class_.user.avatar} alt={class_.user.name} />
        <div>
          <strong>{class_.user.name}</strong>
          <span>{class_.subject}</span>
        </div>
      </header>
      <p>
        {class_.user.bio}
      </p>
      <footer>
        <p>
          Preço por hora:
          <strong>{class_.cost}</strong>
        </p>
        <a
          onClick={createNewConnection}
          href={`https://wa.me/${class_.user.whatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsAppIconSource} alt="whatsapp" />
          Entrar em contacto
        </a>
      </footer>
    </Container>
  );
};

export default TeacherProfile;
