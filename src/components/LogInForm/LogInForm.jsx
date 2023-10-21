import { useDispatch } from 'react-redux';
import { selectToken } from 'redux/slice/selectors';
import { getContactsThunk, logInThunk } from 'redux/slice/test';
import { useSelector } from 'react-redux';

const LogInForm = () => {
  const token = useSelector(selectToken);
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

    // form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>

        <button type="submit">Log in</button>
      </form>
      <button onClick={() => dispatch(getContactsThunk(token))}>
        contacts
      </button>
    </>
  );
};

export default LogInForm;
