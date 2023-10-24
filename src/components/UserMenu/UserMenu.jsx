import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/slice/auth';
import { selectUser } from 'redux/slice/selectors';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Box sx={{ display: 'flex' }}>
      <p>{user?.email}</p>
      <Button variant="contained" onClick={() => dispatch(logOutThunk())}>
        Logout
      </Button>
    </Box>
  );
};
export default UserMenu;
