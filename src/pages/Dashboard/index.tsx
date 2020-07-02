import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/6989544?s=460&v=4"
            alt="Danilo Sales"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy higly scalable e ReactJS & React native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/6989544?s=460&v=4"
            alt="Danilo Sales"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy higly scalable e ReactJS & React native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/6989544?s=460&v=4"
            alt="Danilo Sales"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy higly scalable e ReactJS & React native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
