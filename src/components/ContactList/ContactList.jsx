// import css from './contactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { List } from '@mui/material';
// import { useEffect } from 'react';
import { selectVisibleContacts } from 'redux/slice/selectors';
// import { getContactsThunk } from 'redux/slice/auth';
const ContactList = () => {
  // const dispatch = useDispatch();
  const items = useSelector(selectVisibleContacts);
  const { isLoading, error } = useSelector(state => state.user);

  // useEffect(() => {
  //   dispatch(getContactsThunk());
  // }, [dispatch]);

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>{error}</p>}
      <List>
        {items.map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </List>
    </>
  );
};
export default ContactList;
