import css from 'components/Contact/Contact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { delContact } from 'redux/contactsSlice';

export const Contact = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filterContact = useSelector(state => state.filterContact.filters);

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContact.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return visibleContacts.map(({ name, number, id }) => (
    <li className={css.contact} key={id}>
      {name}: {number}
      <button
        className={css.delButton}
        type="button"
        onClick={() => dispatch(delContact(id))}
      >
        delete
      </button>
    </li>
  ));
};
