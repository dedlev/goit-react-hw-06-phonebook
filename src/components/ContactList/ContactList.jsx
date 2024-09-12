import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
