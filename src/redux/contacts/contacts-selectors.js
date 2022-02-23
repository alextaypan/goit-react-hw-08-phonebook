import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.contacts;
const getLoading = state => state.contacts.isLoading;
const getFilter = state => state.contacts.filter;
const getError = state => state.contacts.error;

const getVisibleContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
});

const contactsSelectors = {
  getContacts,
  getLoading,
  getFilter,
  getError,
  getVisibleContacts,
};

export default contactsSelectors;
