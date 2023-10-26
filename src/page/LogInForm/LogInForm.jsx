import { useDispatch } from 'react-redux';
import { Button, TextField, Container } from '@mui/material';
import { logInThunk } from 'redux/auth';

const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
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
    </Container>
  );
};

export default LogInForm;
