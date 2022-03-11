import React from "react";
import { Thumb, Title, SecondTitle } from "./HomeView.styled.jsx";
import defaultPhonebook from "./phonebook.jpg";

const HomeView = () => (
  <Thumb>
    <Title>Welcome to Phonebook App!</Title>
    <SecondTitle>
      Please, <b>Sign up</b> or <b>Log in</b> to have access to your Contacts!
    </SecondTitle>
    <img src={defaultPhonebook} alt="Книга контактов" />
  </Thumb>
);

export default HomeView;
