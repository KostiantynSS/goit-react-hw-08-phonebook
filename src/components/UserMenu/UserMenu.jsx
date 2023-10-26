import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth';
import { selectUser } from 'redux/selectors';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <p style={{ margin: '0px 15px 0px 0px', display: 'block' }}>
        {user?.email}
      </p>
      <Button
        variant="contained"
        size="medium"
        onClick={() => dispatch(logOutThunk())}
      >
        Logout
      </Button>
    </Box>
  );
};
export default UserMenu;
