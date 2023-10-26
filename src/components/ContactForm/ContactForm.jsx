import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContactThunk } from 'redux/auth';
import { Button, Container, TextField } from '@mui/material';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { name, number } = form;
    const data = {
      name: name.value,
      number: number.value,
    };

    const isExist = contacts.find(
      ({ name }) => data.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    dispatch(addContactThunk(data));

    form.reset();
  };

  return (
    <Container>
      <form
        style={{
          maxWidth: 'max-content',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginTop: '10px',
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          size="small"
          id="name"
          label="name"
          variant="outlined"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <TextField
          size="small"
          id="number"
          label="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button type="submit" variant="contained">
          Add contact
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
