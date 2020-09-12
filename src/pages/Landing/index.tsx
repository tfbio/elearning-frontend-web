import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import img from '../../assets/background.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <img src={img} alt="background" />
      <Content>
        <h1>Aprenda da Melhor Forma</h1>
        <p>
          Entre na plataforma e acesse cursos de diversas áreas de conhecimento
        </p>
        <Link to="/dashboard">
          <button type="button">Acessar</button>
        </Link>
      </Content>
    </Container>
  );
};

export default Landing;
