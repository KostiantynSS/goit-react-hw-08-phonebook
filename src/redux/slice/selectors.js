import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.user.contacts;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
export const selectToken = state => state.user.token;
export const selectIsAuth = state => state.user.isAuth;
