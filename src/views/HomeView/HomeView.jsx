import React from "react";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import { Thumb, Title, SecondTitle } from "./HomeView.styled.jsx";
import defaultPhonebookImg from "./phonebook.jpg";

export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Thumb>
      <Title>Welcome to Phonebook App!</Title>
      {!isLoggedIn && (
        <SecondTitle>
          Please, <b>Sign up</b> or <b>Log in</b> to have access to your
          Contacts!
        </SecondTitle>
      )}
      <img src={defaultPhonebookImg} alt="Книга контактов" />
    </Thumb>
  );
}
