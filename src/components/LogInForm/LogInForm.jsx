import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container } from '@mui/material';

import { getContactsThunk, logInThunk } from 'redux/slice/auth';
// import { selectIsAuth } from 'redux/slice/selectors';
// import { useSelector } from 'react-redux';

const LogInForm = () => {
  // const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleSubmit = e => {
    console.log(e);
    e.preventDefault();
    const form = e.target;
    const { password, email } = form;
    const data = {
      email: email.value,
      password: password.value,
    };
    dispatch(logInThunk(data));

    form.reset();
  };

  return (
    <Container>
      {' '}
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
        <Button variant="contained" type="submit">
          login
        </Button>
      </form>
      <Button variant="contained" onClick={() => dispatch(getContactsThunk())}>
        contacts
      </Button>
    </Container>
  );
};

export default LogInForm;
