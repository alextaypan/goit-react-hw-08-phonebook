import React from 'react';
import { Thumb, Title } from './HomeView.styled.jsx';

const HomeView = () => (
  <Thumb>
    <Title>
      Welcome to Phonebook App! <span role="img" aria-label="Иконка приветствия"></span>
    </Title>
  </Thumb>
);

export default HomeView;
