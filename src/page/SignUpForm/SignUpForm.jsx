import { TextField, Button, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getNewThunk } from 'redux/auth';

const SignUpForm = () => {
  const dispatch = useDispatch();

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
