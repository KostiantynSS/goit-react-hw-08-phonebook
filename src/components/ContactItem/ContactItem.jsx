import { useDispatch } from 'react-redux';
import { ListItem, ListItemText, Button } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import { deleteContactThunk } from 'redux/auth';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const deleteBtnHandler = () => {
    dispatch(deleteContactThunk(contact.id));
  };

  return (
    <ListItem sx={{ padding: 0 }}>
      <ListItemText primary={`${contact.name}: ${contact.number}`} />

      <Button onClick={deleteBtnHandler}>
        <DeleteForever />
      </Button>
    </ListItem>
  );
};

export default ContactItem;
