import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/slice/auth';
import { selectUser } from 'redux/slice/selectors';

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
        sx={{ height: '50%' }}
        onClick={() => dispatch(logOutThunk())}
      >
        Logout
      </Button>
    </Box>
  );
};
export default UserMenu;
