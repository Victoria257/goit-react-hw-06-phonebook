import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 11, name: 'Dan', number: 1223355 },
      { id: 22, name: 'Adam', number: 541232322 },
    ],
  },
  reducers: {
    addContacts(state, action) {
      const contact = {
        id: nanoid(7),
        name: action.payload.name,
        number: action.payload.number,
      };

      const theSameName = state.contacts.find(
        prevContact => prevContact.name === contact.name
      );
      if (theSameName) {
        alert(`${contact.name} is already in contacts`);
      } else {
        state.contacts.push(contact);
      }
    },

    delContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },

    changeFilter: (state, action) => {
      state.filterContact = action.payload.filterContact;
    },
  },
});

export const { addContacts, delContact, changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
