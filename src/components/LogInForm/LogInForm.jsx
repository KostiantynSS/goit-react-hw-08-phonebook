// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

import { getContactsThunk, logInThunk } from 'redux/slice/auth';
// import { selectIsAuth } from 'redux/slice/selectors';
// import { useSelector } from 'react-redux';

const LogInForm = () => {
  // const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { password, email } = form;
    const data = {
      email: email.value,
      password: password.value,
    };
    dispatch(logInThunk(data));

    // form.reset();
  };
  // useEffect(() => {
  //   isAuth && navigate('/');
  // }, [isAuth, navigate]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <label> */}
        {/* Email */}
        <TextField
          id="email"
          label="email"
          variant="outlined"
          type="email"
          name="email"
          required
        />
        {/* <input type="email" name="email" required /> */}
        {/* </label> */}
        {/* <label> */}
        {/* Password */}
        <TextField
          id="password"
          label="password"
          variant="outlined"
          type="password"
          name="password"
          required
        />
        {/* <input type="password" name="password" required /> */}
        {/* </label> */}

        <Button variant="contained" type="submit">
          {/* Log in */}
        </Button>
      </form>
      <Button variant="contained" onClick={() => dispatch(getContactsThunk())}>
        contacts
      </Button>
    </>
  );
};

export default LogInForm;
