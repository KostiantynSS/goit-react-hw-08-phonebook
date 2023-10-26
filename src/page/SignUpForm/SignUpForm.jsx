import { TextField, Button, Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getNewThunk } from 'redux/slice/auth';
import { selectIsAuth } from 'redux/slice/selectors';

const SignUpForm = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { name, password, email } = form;
    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(getNewThunk(data));
  };
  useEffect(() => {
    isAuth && navigate('/contacts');
  }, [isAuth, navigate]);
  return (
    <Container sx={{ width: 'fit-content' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: 'max-content',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginTop: '10px',
        }}
      >
        <TextField
          size="small"
          id="name"
          label="name"
          variant="outlined"
          type="text"
          name="name"
          required
        />

        <TextField
          size="small"
          id="email"
          label="email"
          variant="outlined"
          type="email"
          name="email"
          required
        />

        <TextField
          size="small"
          id="password"
          label="password"
          variant="outlined"
          type="password"
          name="password"
          required
        />

        <Button type="submit" variant="contained">
          Sign up
        </Button>
      </form>
    </Container>
  );
};

export default SignUpForm;
