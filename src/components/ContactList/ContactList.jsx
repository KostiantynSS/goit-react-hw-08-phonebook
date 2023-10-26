import ContactItem from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { List } from '@mui/material';
import { useEffect } from 'react';
import { selectVisibleContacts } from 'redux/selectors';
import { getContactsThunk } from 'redux/auth';

const ContactList = () => {
  const items = useSelector(selectVisibleContacts);
  const { isLoading, error } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      <List sx={{ maxWidth: 400 }}>
        {items.map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </List>
    </>
  );
};
export default ContactList;
