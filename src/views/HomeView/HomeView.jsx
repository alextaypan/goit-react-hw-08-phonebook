import React from "react";
import { Thumb, Title, SecondTitle } from "./HomeView.styled.jsx";

const HomeView = () => (
  <Thumb>
    <Title>Welcome to Phonebook App!</Title>
    <SecondTitle>
      Please, <b>Register</b> or <b>Log in</b> to have access to your Contacts!
    </SecondTitle>
  </Thumb>
);

export default HomeView;
