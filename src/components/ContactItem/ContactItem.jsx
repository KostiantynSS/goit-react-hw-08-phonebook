import { useDispatch } from 'react-redux';
// import css from './contactItem.module.css';
import { ListItem, ListItemText } from '@mui/material';

// import { deleteThunk } from 'redux/slice/operations';
import { deleteContactThunk } from 'redux/slice/auth';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const deleteBtnHandler = () => {
    dispatch(deleteContactThunk(contact.id));
  };

  return (
    <ListItem>
      <ListItemText primary={`${contact.name}: ${contact.number}`} />

      <button onClick={deleteBtnHandler}>Delete</button>
    </ListItem>
  );
};

export default ContactItem;
