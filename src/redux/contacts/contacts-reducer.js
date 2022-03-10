import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as contactsActions from "./contacts-actions";
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./contacts-actions";

const contacts = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [fetchContactsRequest]: () => null,
  [addContactError]: (_, { payload }) => payload,
  [addContactRequest]: null,
  [deleteContactError]: (_, { payload }) => payload,
  [deleteContactRequest]: null,
});

const filter = createReducer("", {
  [contactsActions.filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
  isLoading,
  error,
});
