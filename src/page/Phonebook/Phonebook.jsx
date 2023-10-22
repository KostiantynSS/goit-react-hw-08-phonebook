import { useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { selectIsAuth } from 'redux/slice/selectors';

const Phonebook = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <>
      <h1>Phonebook</h1>
      {isAuth ? (
        <>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />{' '}
        </>
      ) : (
        <h1>Please, login to use App</h1>
      )}
    </>
  );
};

export default Phonebook;
