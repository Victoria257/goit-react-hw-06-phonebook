import { useEffect } from 'react';

import { Form } from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import FilterContacts from './FilterContacts/FilterContacts';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, changeFilter } from 'redux/contactsSlice';

function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filterContacts = useSelector(state => state.filters);

  const dispatch = useDispatch();

  useEffect(() => {
    const contactsList = JSON.parse(localStorage.getItem('contacts'));
    if (contacts.length === 0) {
      contactsList && contacts.push(contactsList);
    } else localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    dispatch(addContacts(data));
  };

  const changeFilters = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <Form
        onSubmit={formSubmitHandler}
        addContacts={addContacts}
        contacts={contacts}
      />
      <ContactList>
        <FilterContacts />
      </ContactList>
    </div>
  );
}

export default App;
