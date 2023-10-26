import { Typography } from '@mui/material';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';

const Phonebook = () => {
  return (
    <>
      <Typography variant="h1" fontSize={'3em'} mt={'15px'}>
        Phonebook
      </Typography>
      <ContactForm />
      <Typography variant="h2" fontSize={'3em'} mt={'15px'}>
        Contacts
      </Typography>
      <Filter />
      <ContactList />{' '}
    </>
  );
};

export default Phonebook;
