import { useSelector } from 'react-redux/es/exports';
import { getContacts, getFilter } from 'redux/contactsSlice';
import css from './ContactList.module.css';
import { getVisibleContacts } from 'helpers/getVisibleContacts';

import ContactItem from 'components/ContactItem';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  return (
    <ul className={css.list}>
      {getVisibleContacts(filter, contacts).map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
