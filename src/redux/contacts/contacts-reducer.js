import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as contactsActions from './contacts-actions';
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
} from './contacts-actions';

const contacts = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    if (state.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase())) {
      alert(`${payload.name} is already in contacts`);
      return state;
    }
    if (state.find(contact => contact.number === payload.number)) {
      alert(`${payload.number} is already in contacts`);
      return state;
    }
    return [payload, ...state];
  },
  [deleteContactSuccess]: (state, { payload }) => state.filter(contact => contact.id !== payload),
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

const error = createReducer(null, {});

const filter = createReducer('', {
  [contactsActions.filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
  isLoading,
  error,
});
