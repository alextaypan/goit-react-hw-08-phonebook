import React from "react";
import { useDispatch, useSelector } from "react-redux";
import contactsSelectors from "../../redux/contacts/contacts-selectors";
import { filterContacts } from "../../redux/contacts/contacts-actions";
import { Label } from "./Filter.styled";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  const changeFilter = (e) => dispatch(filterContacts(e.target.value));

  return (
    <Label>
      Find contacts by name:
      <br />
      <input type="text" value={value} onChange={changeFilter} />
    </Label>
  );
}
