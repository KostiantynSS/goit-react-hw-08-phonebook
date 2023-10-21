import { useDispatch } from 'react-redux';
// import { selectContacts } from 'redux/slice/selectors';
import { getNewThunk } from 'redux/slice/auth';

const SignUpForm = () => {
  //   const contacts = useSelector(selectContacts);
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

    // form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>

        <button type="submit">Sign up</button>
      </form>
    </>
  );
};

export default SignUpForm;
